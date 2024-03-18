// Metadata
import type { Metadata } from "next";

// Styles
import "./globals.css";

export const metadata: Metadata = {
  title: "Difficult Conversations Simulations",
  description: "Developed by @vmmucha",
};

// Components
import Header from "@/app/components/server/header";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
