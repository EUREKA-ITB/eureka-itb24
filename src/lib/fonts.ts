import { Barlow as FontSecondary, Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSecondary = FontSecondary({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
