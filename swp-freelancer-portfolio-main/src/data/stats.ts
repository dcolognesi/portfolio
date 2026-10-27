import type { Stat } from '~/types';

export const stats: Stat[] = [
  { value: 11, suffix: '+', label: 'Years in analytics' },
  { value: 80, suffix: '+', label: 'Professionals trained' },
  { value: 25, suffix: '%', label: 'Client retention uplift' },
];

/** Headline above the stats band, split so the tail can be dimmed. */
export const statsHeading = {
  lead: 'Dashboards are easy. Agreeing on the definition of a conversion',
  tail: 'is the part that actually changes the decision.',
};

/**
 * Poster frame for the studio reel. Set `embedUrl` to a YouTube/Vimeo
 * privacy-friendly embed to make the play button load a real video;
 * leave it empty and the button is hidden.
 */
export const reel = {
  image: '/images/reel-poster.webp',
  alt: 'Two people reviewing notes and sketches at a studio table',
  width: 1000,
  height: 625,
  embedUrl: '',
  label: 'Play the studio reel',
};
