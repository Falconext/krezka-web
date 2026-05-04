
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
// import { sg } from "@/app/public/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://falconext.pe'),
  title: {
    default: "Falconext | Sistema de Facturación Electrónica SUNAT para PYMES en Perú",
    template: "%s | Falconext - Facturación Electrónica Perú"
  },
  description: "El sistema de facturación electrónica #1 en Perú. Emite boletas, facturas y notas de crédito homologadas con SUNAT. Punto de venta (POS), control de inventario y gestión comercial para PYMES. ¡Prueba gratis!",
  keywords: [
    // Keywords principales
    "facturación electrónica",
    "facturación electrónica perú",
    "sistema de facturación",
    "software de facturación",
    "facturación sunat",
    "emisión de facturas electrónicas",
    // Keywords secundarias
    "sistema pos",
    "punto de venta",
    "sistema de ventas perú",
    "control de inventario",
    "software para pymes",
    "gestión de negocios",
    // Keywords long-tail
    "sistema de facturación electrónica homologado sunat",
    "facturación electrónica gratis perú",
    "software facturación para restaurantes",
    "sistema pos para tiendas",
    "emitir boletas electrónicas sunat",
    "facturación electrónica pymes perú",
    // Marca
    "falconext",
    "falconext peru"
  ],
  authors: [{ name: "Falconext", url: "https://falconext.pe" }],
  creator: "Falconext",
  publisher: "Falconext",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/assets/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Falconext | Sistema de Facturación Electrónica SUNAT #1 en Perú",
    description: "Emite facturas, boletas y notas de crédito electrónicas homologadas con SUNAT. Sistema POS, inventario y gestión comercial para PYMES. ¡Prueba gratis hoy!",
    url: "https://falconext.pe/",
    siteName: "Falconext - Facturación Electrónica Perú",
    images: [
      {
        url: "https://falconext.pe/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Falconext - Sistema de Facturación Electrónica para PYMES en Perú"
      }
    ],
    locale: "es_PE",
    type: "website",
    countryName: "Peru"
  },
  twitter: {
    card: "summary_large_image",
    title: "Falconext | Facturación Electrónica SUNAT para PYMES",
    description: "El mejor sistema de facturación electrónica en Perú. Emite boletas, facturas y controla tu inventario fácilmente.",
    images: ["https://falconext.pe/assets/og-image.png"],
    creator: "@falconext"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://falconext.pe',
  },
  category: 'technology',
  verification: {
    // Agregar después de verificar en Google Search Console
    // google: 'tu-código-de-verificación',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Falconext",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PEN",
      "description": "Prueba gratis disponible"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150"
    },
    "description": "Sistema de facturación electrónica SUNAT para PYMES en Perú. Emite boletas, facturas y controla tu inventario.",
    "url": "https://falconext.pe",
    "logo": "https://falconext.pe/assets/logo.png",
    "sameAs": [
      "https://www.facebook.com/falconext",
      "https://www.instagram.com/falconext"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Falconext",
    "url": "https://falconext.pe",
    "logo": "https://falconext.pe/assets/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+51-999-999-999",
      "contactType": "sales",
      "areaServed": "PE",
      "availableLanguage": "Spanish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PE"
    }
  };

  return (
    <html lang="es" className="">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366F1" />
        <link
          precedence="default"
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          precedence="default"
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </head>
      <body
      // className={`${sg.className}`}
      >
        <ClientLayout children={children} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17010708778"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17010708778');
            `,
          }}
        />
      </body>

    </html>
  );
}

