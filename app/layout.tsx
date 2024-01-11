import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Presidency Group Hotels",
  description: "Top-notch infrastructure and integrated hospitality services",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://presidencygrouphotels.com" />
        <meta property="og:title" content={"Presidency Group"} />
        <meta
          property="og:description"
          content={
            "Top-notch infrastructure and integrated hospitality services"
          }
        />
        <meta
          property="og:image"
          content="https://presidencygrouphotels.com/og-image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://presidencygrouphotels.com"
        />
        <meta property="twitter:title" content={"Presidency Group"} />
        <meta
          property="twitter:description"
          content={
            "Top-notch infrastructure and integrated hospitality services"
          }
        />
        <meta
          property="twitter:image"
          content="https://presidencygrouphotels.com/og-image.png"
        />

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
        <link rel="icon" href="favicon.svg" sizes="any" />
      </head>

      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
