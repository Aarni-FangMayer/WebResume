import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { LanguageProvider } from "./contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aarni Fang - Junior Software Developer",
  description: "Personal portfolio website for Aarni Fang, Junior Software Developer (Frontend / Fullstack) based in Helsinki, Finland.",
  keywords: ["software developer", "frontend developer", "fullstack developer", "react", "javascript", "web developer"],
  authors: [{ name: "Aarni Fang" }],
  openGraph: {
    title: "Aarni Fang - Junior Software Developer",
    description: "Personal portfolio website for Aarni Fang, Junior Software Developer (Frontend / Fullstack)",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
