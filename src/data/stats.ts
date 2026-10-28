import type { Stat } from '~/types';

/**
 * Only figures supported by the CV are shown here.
 * The 25% retention figure reported at OTO Agency stays in the experience
 * entry because the CV does not include a baseline or measurement period.
 */
export const stats: Stat[] = [
  { value: 11, suffix: '+', label: 'Years in analytics and SEO' },
  { value: 80, suffix: '+', label: 'Professionals trained' },
  { value: 6, label: 'Roles across agencies, in-house and freelance' },
];

/** Headline above the stats band, split so the tail can be dimmed. */
export const statsHeading = {
  lead: 'The dashboard is the output.',
  tail: 'Agreeing on the metric is the work.',
};

/**
 * Poster frame for the studio reel. Left empty because the available template
 * image is not evidence of the current professional work.
 */
export const reel = {
  image: '',
  alt: '',
  width: 1000,
  height: 625,
  embedUrl: '',
  label: '',
};
