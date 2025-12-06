import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Lumava Portfolio",
  description: "Professional Photography & Video Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-white">
        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        
      </body>
    </html>
  );
}
