import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientThemeProvider } from "@/contexts/ClientThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APX Growth Design",
  description: "Designing the Next Stage of Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light dark:bg-darker text-dark dark:text-light`}>
        <ClientThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
