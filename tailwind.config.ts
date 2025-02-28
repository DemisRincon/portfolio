import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2973B2", // Base blue
          foreground: "#F2F2F2",
          50: "#E1EEF7",
          100: "#C8D9EF",
          200: "#9CBDE3",
          300: "#72A2D6",
          400: "#4787CA",
          500: "#2973B2", // Default
          600: "#205C8F",
          700: "#18456C",
          800: "#102E49",
          900: "#081725",
          950: "#040C12",
        },
        secondary: {
          DEFAULT: "#48A6A7", // Base teal
          foreground: "#F2EFE7", // Soft off-white for readability
          50: "#E0F5F5",
          100: "#C6EBEC",
          200: "#9ACBD0", // Light Green
          300: "#72B0B2",
          400: "#58A1A3",
          500: "#48A6A7", // Default
          600: "#3B8788",
          700: "#2E696A",
          800: "#204B4C",
          900: "#152F30",
          950: "#0B1617",
        },
        tertiary: {
          DEFAULT: "#9ACBD0", // Light Green
          foreground: "#333333", // Dark for contrast
          50: "#E6F5F6",
          100: "#D1ECEE",
          200: "#B3DEE2",
          300: "#9ACBD0", // Default
          400: "#7CB4B9",
          500: "#61989C",
          600: "#4D7A7D",
          700: "#395B5D",
          800: "#263D3F",
          900: "#162325",
          950: "#0B1314",
        },
        cloud: {
          DEFAULT: "#F2F2F2", // Very Light Grey
          foreground: "#333333",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#F2F2F2", // Default
          400: "#EAEAEA",
          500: "#D6D6D6",
          600: "#BFBFBF",
          700: "#A6A6A6",
          800: "#8C8C8C",
          900: "#737373",
          950: "#5A5A5A",
        },
        coal: {
          DEFAULT: "#333333", // Dark Grey
          foreground: "#F2EFE7",
          50: "#D9D9D9",
          100: "#BFBFBF",
          200: "#A6A6A6",
          300: "#8C8C8C",
          400: "#737373",
          500: "#666666",
          600: "#4D4D4D",
          700: "#333333", // Default
          800: "#1A1A1A",
          900: "#0D0D0D",
          950: "#050505",
        },
        stone: {
          DEFAULT: "#666666", // Mid Grey
          foreground: "#F2EFE7",
          50: "#ECECEC",
          100: "#D9D9D9",
          200: "#BFBFBF",
          300: "#A6A6A6",
          400: "#8C8C8C",
          500: "#737373",
          600: "#666666", // Default
          700: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
          950: "#0D0D0D",
        },
        sand: {
          DEFAULT: "#F2EFE7", // Off-white
          foreground: "#333333",
          50: "#FEFBF7",
          100: "#FCF7EF",
          200: "#F7F2E7",
          300: "#F2EFE7", // Default
          400: "#E8E0D7",
          500: "#D6C8B8",
          600: "#BFAE9D",
          700: "#A69583",
          800: "#8C7C6A",
          900: "#736253",
          950: "#5A493D",
        },
      },
      fontFamily: {
        bebasNeue: ["var(--font-bebas-neue)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
