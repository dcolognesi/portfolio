import type { Client } from '~/types';

/**
 * Logos for the marquee strip. Each entry draws on a 24×24 viewBox with
 * `fill="none" stroke="currentColor" stroke-width="1.8"`, so a simple
 * path or a couple of shapes is all you need.
 */
export const clients: Client[] = [
  { name: 'Plan.Net Italia', shape: '<path d="M5 20V4h7a5 5 0 0 1 0 10H5"/>' },
  { name: 'OTO Agency', shape: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/>' },
  { name: 'Free-way Agency', shape: '<path d="M4 6h16M4 12h10M4 18h16"/>' },
  { name: 'A. Minieri S.p.A.', shape: '<path d="M12 4 20 20H4z"/><path d="M8.5 15h7"/>' },
  { name: 'Coyote Systems', shape: '<path d="M4 12c3-5 5-5 8 0s5 5 8 0"/>' },
  { name: 'JobsAcademy', shape: '<path d="M4 8 12 4l8 4-8 4z"/><path d="M8 10v5c0 1.5 8 1.5 8 0v-5"/>' },
];

export const clientsLabel = 'Clients & teams I have worked with';
