/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          background: "#0D0D0D",     // Rich black
          surface: "#1A1A1A",        // Dark charcoal
          surface2: "#262626",       // Mid charcoal
          text: "#F5F5F5",           // Off-white
          muted: "#A3A3A3",          // Muted text
          primary: "#E5E5E5",        // For icons or headings
          secondary: "#7F7F7F",      // For supporting text or borders
        }
      },
    },
  },
  plugins: [],
};
