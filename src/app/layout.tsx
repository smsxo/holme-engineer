import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://holme-engineering.com"),
  title: {
    default: "Holme Engineering AS — Maritime & Energy Systems",
    template: "%s | Holme Engineering AS",
  },
  description:
    "Norwegian engineering excellence in power management, energy storage, and automation for maritime and energy industries.",
  keywords: [
    "maritime engineering",
    "power management systems",
    "energy storage",
    "ship automation",
    "micro grids",
    "shore connections",
    "Norwegian engineering",
    "Holme Engineering",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://holme-engineering.com",
    siteName: "Holme Engineering AS",
    title: "Holme Engineering — Maritime & Energy Systems",
    description:
      "Norwegian engineering excellence in power management, energy storage, and automation — 200+ systems across 30+ countries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holme Engineering — Maritime & Energy Systems",
    description:
      "Power management, energy storage & automation for maritime and energy industries. Norwegian precision, globally deployed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Holme Engineering AS",
  description:
    "Norwegian engineering excellence in power management, energy storage, and automation for maritime and energy industries.",
  url: "https://holme-engineering.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@holme-engineering.com",
    contactType: "customer service",
  },
  sameAs: ["https://linkedin.com/company/holme-engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light")}}catch(e){}})();`,
          }}
        />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ThemeProvider>
          <LenisProvider>
            <Navigation />
            <main id="main-content">{children}</main>
            <Footer />
            <ScrollToTop />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
