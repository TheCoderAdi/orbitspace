import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OrbitSpace",
  description:
    "Explore the cosmos with OrbitSpace, your gateway to the universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
