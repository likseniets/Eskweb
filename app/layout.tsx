import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.steineskil.com"),
  title: "Eskweb - Personal Website",
  description:
    "A personal website built with Next.js showcasing my resume, projects, and music interests.",
  keywords: [
    "Stein-Eskil",
    "Stein Eskil",
    "Eskil",
    "Stein",
    "Losvar",
    "Norwegian Developer",
    "Norsk Utvikler",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Resume",
    "Projects",
    "Music",
    "Next.js",
    "Personal Website",
  ],
  alternates: {
    canonical: "https://www.steineskil.com",
  },
  openGraph: {
    title: "Eskweb - Personal Website",
    description:
      "A personal website built with Next.js showcasing my resume, projects, and music interests.",
    url: "https://www.steineskil.com",
    siteName: "Eskweb",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Eskweb - Personal Website",
    description:
      "A personal website built with Next.js showcasing my resume, projects, and music interests.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Header />
        {children}
      </body>
    </html>
  );
}
