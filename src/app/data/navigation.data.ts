import { BRAND } from './brand.data';

export const NAVIGATIONS = {

  // Landing layout
  root: {
    url: '',
    title: BRAND.name,
    description: BRAND.name + 'provide open source apps, games and responsive websites',
    keywords: [BRAND.name, 'open source app', 'open source game', 'open source website'],
  },
  home: {
    url: 'home',
    title: BRAND.name,
    description: BRAND.name + 'provide open source apps, games and responsive websites',
    keywords: [BRAND.name, 'open source app', 'open source game', 'open source website'],
  },
  products: {
    url: 'products',
    title: 'Products - ' + BRAND.name,
    description: BRAND.name + 'Products',
    keywords: [BRAND.name, BRAND.name + 'Products', 'open source app', 'open source game', 'open source website'],
  },
  contactUs: {
    url: 'contact-us',
    title: 'Contact Us - ' + BRAND.name,
    description: BRAND.name + 'Contact Us',
    keywords: [BRAND.name, BRAND.name + 'Contact Us', 'open source app', 'open source game', 'open source website'],
  },
  privacyPolicy: {
    url: 'privacy-policy',
    title: 'Privacy Policy - ' + BRAND.name,
    description: BRAND.name + 'Privacy Policy',
    keywords: [BRAND.name, BRAND.name + 'Privacy Policy', 'open source app', 'open source game', 'open source website'],
  }
};

export const URLS = {
  // Landing layout
  root: '/',
  home: '/' + NAVIGATIONS.home.url,
  products: '/' + NAVIGATIONS.products.url,
  contact: '/' + NAVIGATIONS.contactUs.url,
  privacyPolicy: '/' + NAVIGATIONS.privacyPolicy.url,
};
