import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "bedrinth",
    template: "%s | bedrinth",
  },
  description: "A package index for LeviLamina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
