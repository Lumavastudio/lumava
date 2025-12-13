// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Lumava Studio",
  description: "Crafting cinematic visuals & immersive experiences for brands and creators.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=10" },
      { url: "/favicon-32x32.png?v=10", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=10", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=10", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest?v=10",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
