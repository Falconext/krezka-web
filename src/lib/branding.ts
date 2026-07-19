/**
 * Sistema de Branding Centralizado
 * Identidad visual de Krezka desde un solo lugar.
 */

export type BrandConfig = {
  name: string;
  legalName: string;
  website: string;
  email: string;
  phone: string;
  whatsapp: string;
  logo: string;
  logoWhite: string;
  primaryColor: string;
  secondaryColor: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  dashboardUrl: string;
};

const brands: Record<string, BrandConfig> = {
  krezka: {
    name: 'Krezka',
    legalName: 'Krezka Soluciones Digitales',
    website: 'https://krezka.com',
    email: 'ventas@krezka.com',
    phone: '+51 972 258 391',
    whatsapp: '51972258391',
    logo: '/assets/krezka/krezka.png',
    logoWhite: '/assets/krezka/krezkawhite.png',
    primaryColor: '#00D0D4',
    secondaryColor: '#00A0A4',
    socials: {
      facebook: '#',
      instagram: '#',
    },
    dashboardUrl: 'https://app.krezka.com'
  }
};

export const BRAND = brands.krezka;
