import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { Provider } from "react-wrap-balancer";

export const metadata: Metadata = {
  title: "Adansi United",
  // description: "Generated by create next app",
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
      </head>
      <body className={`antialiased`}>
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
