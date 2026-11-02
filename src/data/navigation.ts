import type { NavItem } from '~/types';

/**
 * Primary navigation.
 *
 * `anchor` is used only on the homepage: when the visitor is already on
 * `/`, the link jumps to that section instead of reloading the page.
 */
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Selected projects', href: '/work/', anchor: '#work' },
  { label: 'My Methodology', href: '/#method', anchor: '#method' },
  { label: 'C.V.', href: '/#cv', anchor: '#cv' },
  { label: 'FAQ', href: '/#faq', anchor: '#faq' },
  { label: 'Contact', href: '/contact/' },
];

/** Extra links shown only in the mobile drawer. */
export const mobileExtraNav: NavItem[] = [
  { label: 'About', href: '/about/' },
  { label: 'Education', href: '/about/#education' },
];

export const footerNav = {
  explore: [
    { label: 'Projects', href: '/work/' },
    { label: 'Skills', href: '/about/#skills' },
    { label: 'Experience', href: '/about/#experience' },
    { label: 'CV', href: '/about/#cv' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ] satisfies NavItem[],
  legal: [
    { label: 'Privacy', href: '/privacy/' },
    { label: 'Terms', href: '/terms/' },
  ] satisfies NavItem[],
};
