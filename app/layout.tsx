import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multibagger Stock Scanner - NSE & BSE",
  description: "Advanced stock scanner to identify potential multibagger stocks from NSE and BSE based on rigorous 7-part framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
