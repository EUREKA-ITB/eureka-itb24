import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neutral: {
          100: "hsl(var(--neutral-100))",
          300: "hsl(var(--neutral-300))",
          foreground: "hsl(var(--neutral-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          50: "hsl(var(--primary-50))",
          300: "hsl(var(--primary-300))",
          500: "hsl(var(--primary-500))",
          700: "hsl(var(--primary-700))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          50: "hsl(var(--secondary-50))",
          300: "hsl(var(--secondary-300))",
          500: "hsl(var(--secondary-500))",
          700: "hsl(var(--secondary-700))",
          900: "hsl(var(--secondary-900))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          100: "hsl(var(--destructive-100))",
          400: "hsl(var(--destructive-400))",
          800: "hsl(var(--destructive-800))",
          950: "hsl(var(--destructive-950))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          100: "hsl(var(--accent-100))",
          400: "hsl(var(--accent-400))",
          800: "hsl(var(--accent-800))",
          950: "hsl(var(--accent-950))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          50: "hsl(var(--success-50))",
          500: "hsl(var(--success-500))",
          700: "hsl(var(--success-700))",
          900: "hsl(var(--success-900))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          50: "hsl(var(--warning-50))",
          300: "hsl(var(--warning-300))",
          700: "hsl(var(--warning-700))",
          900: "hsl(var(--warning-900))",
          foreground: "hsl(var(--warning-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
