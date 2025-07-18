import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jigar Adesara | Mobile Application Engineer Portfolio",
  description:
    "Portfolio of Jigar Adesara, Mobile Application Engineer with 6+ years of experience in React Native, Flutter, Android development, and cross-platform mobile applications.",
  keywords: [
    "Jigar Adesara",
    "Mobile Application Engineer",
    "React Native",
    "Flutter",
    "Android",
    "Cross-platform Development",
    "Mobile Apps",
    "Portfolio",
    "Mobile Developer",
    "VoIP",
    "Firebase",
    "AWS Amplify",
  ],
  openGraph: {
    title: "Jigar Adesara | Mobile Application Engineer Portfolio",
    description:
      "Portfolio of Jigar Adesara, Mobile Application Engineer with 6+ years of experience in React Native, Flutter, Android development, and cross-platform mobile applications.",
    url: "https://yourdomain.com/",
    siteName: "Jigar Adesara Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
