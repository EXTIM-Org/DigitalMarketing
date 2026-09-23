import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EXTIM Digital | طراحی سایت و نرم‌افزار",
  description: "خدمات مدرن طراحی وب‌سایت، توسعه نرم‌افزار، ربات‌های اتوماسیون و سئو.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
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
