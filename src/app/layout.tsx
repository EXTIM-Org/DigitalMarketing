import type { Metadata } from "next";
import Link from "next/link";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://extim.ir"),
  title: {
    default: "EXTIM Digital | طراحی سایت و نرم‌افزار",
    template: "%s | EXTIM Digital",
  },
  description: "خدمات مدرن طراحی وب‌سایت، توسعه نرم‌افزار، ربات‌های اتوماسیون و سئو.",
  openGraph: {
    title: "EXTIM Digital | طراحی سایت و نرم‌افزار",
    description: "خدمات مدرن طراحی وب‌سایت، توسعه نرم‌افزار، ربات‌های اتوماسیون و سئو.",
    url: "https://extim.ir",
    siteName: "EXTIM Digital",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EXTIM Digital | طراحی سایت و نرم‌افزار",
    description: "خدمات مدرن طراحی وب‌سایت، توسعه نرم‌افزار، ربات‌های اتوماسیون و سئو.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className={vazirmatn.variable}>
      <body>
        <ThemeProvider>
          <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <main style={{ paddingTop: '80px', flexGrow: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
