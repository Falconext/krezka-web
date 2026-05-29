import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import Script from "next/script";
import { BRAND } from "@/lib/branding";

export async function generateMetadata(): Promise<Metadata> {
  const isFalconext = BRAND.name.toLowerCase() === "falconext";
  const brandLogo = isFalconext ? "/assets/logofalconext.png" : "/assets/krezka/krezkalogo.png";
  const ogImage = `${BRAND.website}${brandLogo}`;
  const title = isFalconext
    ? "Falconext | Facturación Electrónica SUNAT y POS para Empresas en Perú"
    : "Krezka | Facturación Electrónica SUNAT y POS para Negocios en Perú";
  const description = isFalconext
    ? "Falconext: sistema de facturación electrónica SUNAT con boletas, facturas, notas de crédito, POS e inventario. Optimizado para empresas y PYMES en Perú."
    : "Krezka: software de facturación electrónica SUNAT con POS, control de inventario y gestión comercial para negocios en Perú.";

  return {
    metadataBase: new URL(BRAND.website),
    title: {
      default: title,
      template: `%s | ${BRAND.name} - Facturación Electrónica Perú`
    },
    description,
    keywords: [
      "facturación electrónica",
      "facturación electrónica perú",
      "sistema de facturación",
      "software de facturación",
      "facturación sunat",
      "punto de venta",
      BRAND.name.toLowerCase(),
      `${BRAND.name.toLowerCase()} peru`,
      "boleta electrónica",
      "factura electrónica",
      "software sunat",
      "sistema pos peru",
      "control de inventario peru"
    ],
    authors: [{ name: BRAND.name, url: BRAND.website }],
    creator: BRAND.name,
    publisher: BRAND.name,
    icons: {
      icon: [
        { url: brandLogo, sizes: '32x32', type: 'image/png' },
        { url: brandLogo, sizes: '192x192', type: 'image/png' },
      ],
      apple: [
        { url: brandLogo, sizes: '180x180', type: 'image/png' },
      ],
      shortcut: [brandLogo],
    },
    manifest: '/manifest.json',
    openGraph: {
      title,
      description,
      url: `${BRAND.website}/`,
      siteName: `${BRAND.name} - Facturación Electrónica Perú`,
      images: [
        {
          url: ogImage,
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
      title,
      description,
      images: [ogImage],
      creator: `@${BRAND.name.toLowerCase()}`
    },
    alternates: {
      canonical: BRAND.website,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "business",
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
    "logo": `${BRAND.website}${BRAND.logo}`,
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
    "logo": `${BRAND.website}${BRAND.logo}`,
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
