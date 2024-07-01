import { ThemeProvider } from "@/components/theme-provider";
import { fontSans, fontSecondary } from "@/lib/fonts";
import { metadata as metadataData } from "@/lib/metadata";
import { cn } from "@/lib/utils/shadcn-utils";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = metadataData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "antialiased",
          fontSans.className,
          fontSecondary.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
