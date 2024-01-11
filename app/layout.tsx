import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Presidency Group Hotels",
  description: "Top-notch infrastructure and integrated hospitality services",

  openGraph: {
    title: "Presidency Group Hotels",
    description: "Top-notch infrastructure and integrated hospitality services",
    url: "https://presidencygrouphotels.com",
    siteName: "Presidency Group",
    images: [
      {
        url: "https://presidencygrouphotels.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //TODO: Add Social Preview Tags
  //TODO: Move to new meta data style
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#af996e" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#af996e" />
        <meta name="theme-color" content="#af996e" />
        <link rel="icon" href="logo.svg" sizes="any" />
      </head>

      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
