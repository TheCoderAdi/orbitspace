import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`antialiased`}>
        {children}
        <Toaster
          toastOptions={{
            style: {
              borderRadius: "8px",
              padding: "16px",
              fontSize: "14px",
              backgroundColor: "#1a1a1a",
              color: "#f0f0f0",
            },
          }}
        />
      </body>
    </html>
  );
}
