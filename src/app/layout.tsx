import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { fontSans, fontSecondary } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Coming Soon - EUREKA! ITB 2024",
  description:
    "Suatu acara kompetisi tahunan yang diselenggarakan oleh BSO EUREKA! ITB 2024",
  applicationName: "EUREKA! ITB",
  publisher: "EUREKA! ITB 2024",
  creator: "Tim IT EUREKA! ITB 2024",
  authors: [
    { name: "Muhammad Afief Abdurrahman", url: "https://afief.toscamedia.net" },
    { name: "Richard Daniel Sihombing" },
    { name: "Muhammad Zydan Priambada" },
    { name: "Ahmad Royyan Fatah" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
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
