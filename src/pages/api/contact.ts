import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

/**
 * On-demand endpoint: it must run on the Cloudflare runtime, not at build
 * time, so it opts out of prerendering.
 */
export const prerender = false;

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  _gotcha?: unknown;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case '&':
        return '&' + 'amp;';
      case '<':
        return '&' + 'lt;';
      case '>':
        return '&' + 'gt;';
      case '"':
        return '&' + 'quot;';
      default:
        return '&' + '#39;';
    }
  });

const readPayload = async (request: Request): Promise<ContactPayload | null> => {
  const contentType = request.headers.get('content-type') ?? '';

  try {
    if (contentType.includes('application/json')) {
      return (await request.json()) as ContactPayload;
    }

    const formData = await request.formData();
    return Object.fromEntries(formData.entries());
  } catch {
    return null;
  }
};

export const POST: APIRoute = async ({ request }) => {
  const payload = await readPayload(request);

  if (!payload) {
    return json({ success: false, message: 'Invalid request body.' }, 400);
  }

  // Honeypot: pretend everything went fine so bots do not retry.
  if (typeof payload._gotcha === 'string' && payload._gotcha.trim() !== '') {
    return json({ success: true }, 200);
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!name || !email || !message) {
    return json(
      { success: false, message: 'Name, email and message are required.' },
      400,
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, message: 'Please enter a valid email address.' }, 400);
  }

  if (name.length > 200 || message.length > 5000) {
    return json({ success: false, message: 'The message is too long.' }, 400);
  }

  const runtimeEnv = env as unknown as Record<string, string | undefined>;
  const buildEnv = import.meta.env as Record<string, string | undefined>;

  const apiKey = runtimeEnv?.RESEND_API_KEY ?? buildEnv.RESEND_API_KEY;

  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not configured.');
    return json(
      { success: false, message: 'The contact form is not configured yet.' },
      500,
    );
  }

  const to =
    runtimeEnv?.CONTACT_TO_EMAIL ??
    buildEnv.CONTACT_TO_EMAIL ??
    'oceanmarketingitalia@gmail.com';
  const from =
    runtimeEnv?.CONTACT_FROM_EMAIL ??
    buildEnv.CONTACT_FROM_EMAIL ??
    'Portfolio Contact <onboarding@resend.dev>';

  const subject = `New enquiry from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const html = `
    <h2>New enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      console.error('[contact] Resend error', response.status, detail);
      return json(
        { success: false, message: 'The message could not be sent. Please try again.' },
        502,
      );
    }

    return json({ success: true }, 200);
  } catch (error) {
    console.error('[contact] Unexpected error', error);
    return json(
      { success: false, message: 'The message could not be sent. Please try again.' },
      500,
    );
  }
};
