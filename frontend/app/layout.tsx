import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/composites/navigation/Menu";

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
      default: "JakoFakt? • Hlavní stránka",
      template: "JakoFakt? • %s",
  },
  description: "Vyhledejte dezinformace, hoaxy, podvody a lži dříve, než naletíte. JakoFakt? je váš spolehlivý vyhledávač pro ověřování informací online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Menu />
        {children}
      </body>
    </html>
  );
}
