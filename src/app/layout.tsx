import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { fontSans, fontSecondary } from "@/lib/fonts";
import { metadataData } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = metadataData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontSecondary.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
