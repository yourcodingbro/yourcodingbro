import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import QueryProvider from "@/lib/providers/QueryProvider";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "YourCodingBro",
    template: "%s | YourCodingBro",
  },
  appleWebApp: {
    title: "YourCodingBro",
  },
  verification: {
    google: "jusdYBeTS06nLfNCmnSVcuhKuFiUlGW-v_DR8YUFqjA",
    other: {
      bing: "D5A4A1C69BEC76A744FD07456B68507D",
      pinterest: "d5cdbfd7f2334b2d023429fd232b4b9f",
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-full">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="dark"
            enableSystem
          >
            <QueryProvider>{children}</QueryProvider>
            <CookieConsentBanner />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
