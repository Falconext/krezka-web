
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
// import { sg } from "@/app/public/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sistema de Facturación Electrónica y Gestión de Negocios | Falconext",
  description: "Aumenta las ventas de tu negocio con Falconext. El mejor sistema de facturación electrónica SUNAT, punto de venta (POS) y gestión de inventarios para PYMES en Perú.",
  keywords: ["facturación electrónica", "sistema de ventas", "sistema pos", "sunat", "falconext", "software de gestión", "facturación peru", "sistema de inventario"],
  icons: {
    icon: 'assets/fnlogo.png'
  },
  openGraph: {
    title: "Sistema de Facturación Electrónica y Gestión | Falconext",
    description: "Controla tu negocio con Falconext: Facturación electrónica ilimitada, control de inventario y punto de venta multicanal.",
    url: "https://falconext.pe/",
    siteName: "Falconext",
    images: [
      {
        url: "https://falconext.pe/assets/fnlogo.png",
        width: 800,
        height: 600,
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Falconext - Sistema de Facturación Electrónica",
    description: "Facturación electrónica SUNAT y gestión comercial para tu empresa.",
    images: ["https://falconext.pe/assets/fnlogo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
