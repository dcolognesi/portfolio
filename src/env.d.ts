/// <reference types="astro/client" />

/**
 * Cloudflare Workers runtime bindings. The adapter injects the real binding
 * types at build time; this minimal declaration keeps `astro check` happy
 * for the environment variables used by the contact endpoint.
 */
declare module 'cloudflare:workers' {
  export const env: Record<string, string | undefined>;
}
