import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { DebugHelper } from "./debug-helper";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

// Add a console log for debugging
console.log("Root layout module loaded");

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  // Add console log for debugging
  console.log("Rendering RootLayout");
  
  return (
    <html lang="en">
      <head>
        {/* Add debugging script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('Page loaded at:', new Date().toISOString());
              window.onerror = function(message, source, lineno, colno, error) {
                console.error('Global error caught:', { message, source, lineno, colno, error });
                return false;
              };
            `
          }}
        />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        {/* Include Debug Helper */}
        <DebugHelper />
        <StarsCanvas />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
