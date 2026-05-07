import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import Script from "next/script";
import { BRAND } from "@/lib/branding";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(BRAND.website),
    title: {
      default: `${BRAND.name} | Sistema de Facturación Electrónica SUNAT para PYMES en Perú`,
      template: `%s | ${BRAND.name} - Facturación Electrónica Perú`
    },
    description: `El sistema de facturación electrónica #1 en Perú. Emite boletas, facturas y notas de crédito homologadas con SUNAT. Punto de venta (POS), control de inventario y gestión comercial para PYMES. ¡Prueba gratis!`,
    keywords: [
      "facturación electrónica",
      "facturación electrónica perú",
      "sistema de facturación",
      "software de facturación",
      "facturación sunat",
      "punto de venta",
      BRAND.name.toLowerCase(),
      `${BRAND.name.toLowerCase()} peru`
    ],
    authors: [{ name: BRAND.name, url: BRAND.website }],
    creator: BRAND.name,
    publisher: BRAND.name,
    icons: {
      icon: [
        { url: '/assets/krezka/krezkalogo.png', sizes: '32x32', type: 'image/png' },
        { url: '/assets/krezka/krezkalogo.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: [
        { url: '/assets/krezka/krezkalogo.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/manifest.json',
    openGraph: {
      title: `${BRAND.name} | Sistema de Facturación Electrónica SUNAT #1 en Perú`,
      description: "Emite facturas, boletas y notas de crédito electrónicas homologadas con SUNAT. Sistema POS, inventario y gestión comercial para PYMES. ¡Prueba gratis hoy!",
      url: `${BRAND.website}/`,
      siteName: `${BRAND.name} - Facturación Electrónica Perú`,
      images: [
        {
          url: `${BRAND.website}/assets/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${BRAND.name} - Sistema de Facturación Electrónica para PYMES en Perú`
        }
      ],
      locale: "es_PE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${BRAND.name} | Facturación Electrónica SUNAT para PYMES`,
      description: "El mejor sistema de facturación electrónica en Perú. Emite boletas, facturas y controla tu inventario fácilmente.",
      images: [`${BRAND.website}/assets/og-image.png`],
      creator: `@${BRAND.name.toLowerCase()}`
    },
    alternates: {
      canonical: BRAND.website,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": BRAND.name,
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
    "description": `Sistema de facturación electrónica SUNAT para PYMES en Perú. Emite boletas, facturas y controla tu inventario.`,
    "url": BRAND.website,
    "logo": `${BRAND.website}/assets/krezka/krezkalogo.png`,
    "sameAs": [
      BRAND.socials.facebook,
      BRAND.socials.instagram
    ].filter(Boolean)
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BRAND.name,
    "url": BRAND.website,
    "logo": `${BRAND.website}/assets/krezka/krezkalogo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BRAND.phone,
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

