import type { Client } from '~/types';

/**
 * Teams and organisations supplied by Dario Colognesi.
 *
 * Each entry draws on a 24×24 viewBox with `fill="none" stroke="currentColor"
 * stroke-width="1.8"`. The shapes are neutral marks, not official logos.
 */
export const clients: Client[] = [
  { name: 'FINCANTIERI', shape: '<path d="M4 16h16l-2 4H6z"/><path d="M8 16V8h8v8"/>' },
  { name: 'LEROY MERLIN', shape: '<path d="M4 20V4h10v16"/><path d="M14 10h6v10"/>' },
  { name: 'GOLDEN GOOSE', shape: '<path d="M3 17h18"/><path d="M4 17v-4l4-2 3 2h4l4 4"/>' },
  { name: 'UNISALUTE', shape: '<path d="M12 4v16M4 12h16"/>' },
  { name: 'OROGEL', shape: '<path d="M4 12h16a8 8 0 0 1-16 0z"/><path d="M9 9c0-2 1-2 1-4M14 9c0-2 1-2 1-4"/>' },
  { name: 'SPERLARI', shape: '<circle cx="12" cy="12" r="4"/><path d="M8 9 4 6l1 6-1 6 4-3M16 9l4-3-1 6 1 6-4-3"/>' },
  { name: 'ISEO', shape: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/><circle cx="12" cy="16" r="1.5"/>' },
  { name: 'ITALO', shape: '<rect x="6" y="3" width="12" height="14" rx="3"/><path d="M6 11h12"/><path d="M8 21l2-4M16 21l-2-4"/>' },
  { name: 'PINALLI', shape: '<path d="M4 18 12 4l8 14z"/>' },
  { name: 'UNIPOL MOVE', shape: '<path d="M4 8h12l4 4-4 4H4z"/>' },
  { name: 'IUBENDA', shape: '<path d="M12 4v16M8 20h8M4 8h16"/><path d="M6 8 4 13a2.5 2.5 0 0 0 5 0zM18 8l-2 5a2.5 2.5 0 0 0 5 0z"/>' },
  { name: 'INSURANCE TRADE', shape: '<path d="M4 12h16M12 4v16"/><circle cx="12" cy="12" r="7"/>' },
  { name: 'TERME DI TELESE', shape: '<path d="M4 16c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/><path d="M6 8h12"/>' },
  { name: 'PALAZZO CARACCIOLO', shape: '<path d="M4 20V8l8-4 8 4v12z"/><path d="M9 20v-6h6v6"/>' },
  { name: 'AGN ENERGIA', shape: '<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>' },
];

export const clientsLabel = 'Clients and teams I have worked with';
