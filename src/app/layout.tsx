import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0F17",
  width: "device-width",
  initialScale: 1,
};

export const icons = {
  icon: [
    { url: "/title_logo.png", sizes: "any" },
    { url: "/favicon.ico" }
  ],
  shortcut: "/title_logo.png",
  apple: "/title_logo.png",
};

export const metadata: Metadata = {
  title: "NexBridge Tech Consulting | Custom Software & AI Development Company",
  description:
    "NexBridge is a premier custom software development company and AI development agency. We build high-performance web applications, custom mobile apps, and scalable cloud systems.",
  keywords: [
    "Custom Software Development Company",
    "AI Development Agency",
    "Enterprise SaaS Development",
    "Custom Mobile App Development",
    "Cloud Migration Services",
    "AI Integration Consultants",
    "Web Development Agency",
    "Full-Stack Web Development",
    "Bank-Grade Security",
  ],
  authors: [{ name: "NexBridge Tech Consulting" }],
  creator: "NexBridge Tech Consulting",
  publisher: "NexBridge Tech Consulting",
  openGraph: {
    title: "NexBridge Tech Consulting | Custom Software & AI Development Company",
    description:
      "NexBridge builds high-performance custom software, enterprise AI solutions, and scalable cloud applications.",
    url: "https://nexbridge.tech",
    siteName: "NexBridge Tech Consulting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexBridge Tech Consulting | Next-Gen AI & Full-Stack Software Solutions",
    description:
      "Transform your business with NexBridge Tech Consulting. Enterprise AI Solutions, MERN Stack, and Cloud Architecture.",
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
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased bg-[#1A1A1A] text-white min-h-screen flex flex-col selection:bg-[#F4A049] selection:text-[#1A1A1A]`}
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
