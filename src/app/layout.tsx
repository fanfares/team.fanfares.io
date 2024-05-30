import type { Metadata } from "next";
import { Gloock } from "next/font/google";
import "./globals.css";

const inter = Gloock({ weight: "400", style: "normal", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "The FanFares.io Team",
  description: "Here are the nostr accounts of the FanFares.io team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
