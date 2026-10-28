import type { NavItem } from '~/types';

/**
 * Primary navigation.
 *
 * `anchor` is used only on the homepage: when the visitor is already on
 * `/`, the link jumps to that section instead of reloading the page.
 */
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/', anchor: '#about' },
  { label: 'CV', href: '/about/#cv', anchor: '#cv' },
  { label: 'Work', href: '/work/', anchor: '#work' },
  { label: 'Journal', href: '/journal/', anchor: '#journal' },
  { label: 'Contact', href: '/contact/' },
];

/** Extra links shown only in the mobile drawer. */
export const mobileExtraNav: NavItem[] = [
  { label: 'Experience', href: '/about/#experience' },
  { label: 'Education', href: '/about/#education' },
  { label: 'Skills', href: '/about/#cv-skills' },
  { label: 'FAQ', href: '/contact/#faq' },
];

export const footerNav = {
  explore: [
    { label: 'About', href: '/about/' },
    { label: 'CV', href: '/about/#cv' },
    { label: 'Selected work', href: '/work/' },
    { label: 'Journal', href: '/journal/' },
    { label: 'Contact', href: '/contact/' },
  ] satisfies NavItem[],
  legal: [
    { label: 'Privacy', href: '/privacy/' },
    { label: 'Terms', href: '/terms/' },
    { label: 'RSS', href: '/rss.xml' },
  ] satisfies NavItem[],
};
