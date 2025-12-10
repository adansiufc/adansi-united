import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { Provider } from "react-wrap-balancer";

export const metadata: Metadata = {
  title: "Adansi United",
  description:
    "Adansi United Football Club is dedicated to creating a platform where dreams meet reality. We are not just playing football, we are building futures, one goal at a time.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://adansiunitedfc.com"),
  openGraph: {
    title: "Adansi United",
    description:
      "Adansi United Football Club is dedicated to creating a platform where dreams meet reality. We are not just playing football, we are building futures, one goal at a time.",
    url: "https://adansiunitedfc.com",
    siteName: "Adansi United",
    images: [
      {
        url: "https://adansiunitedfc.com/snapshot.png",
        width: 1200,
        height: 630,
        alt: "Adansi United social preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adansi United",
    description:
      "Adansi United Football Club is dedicated to creating a platform where dreams meet reality. We are not just playing football, we are building futures, one goal at a time.",
    images: ["https://adansiunitedfc.com/snapshot.png"],
  },
  other: {
    // ✅ Force explicit Open Graph tags for WhatsApp/Facebook
    "og:image": "https://adansiunitedfc.com/snapshot.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:type": "website",
    "og:title": "Adansi United",
    "og:description":
      "Adansi United Football Club is dedicated to creating a platform where dreams meet reality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/assets/hero.png" as="image" />
        <link rel="preload" href="/assets/hero2.png" as="image" />
        <link rel="preload" href="https://adansiunitedfc.com/snapshot.png" as="image" />

        {/* ✅ Explicit fallback meta tags (in case Next.js doesn’t inject automatically) */}
        <meta property="og:image" content="https://adansiunitedfc.com/snapshot.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Adansi United" />
        <meta
          property="og:description"
          content="Adansi United Football Club is dedicated to creating a platform where dreams meet reality."
        />
      </head>
      <body className="antialiased">
        <Provider>
          <Toaster richColors />
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
