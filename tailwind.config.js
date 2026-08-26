/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            950: "#060d1f",
            900: "#0b152c",
            800: "#112247",
            700: "#182e5e",
            600: "#1e3a78",
            500: "#254894",
          },
          gold: {
            600: "#D49400",
            500: "#F2A900",
            400: "#FFC72C",
            300: "#FFD700",
            200: "#FFE44D",
            100: "#FFF3B3",
          },
          blue: {
            500: "#0066cc",
            600: "#0052a3",
          }
        },
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
        pulseGlow: {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "pulse-glow": "pulseGlow 4s infinite ease-in-out",
        "float": "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
