import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rust: {
          DEFAULT: "#C44514",
          dark: "#A6370D",
          muted: "rgba(196, 69, 20, 0.12)",
          border: "rgba(196, 69, 20, 0.3)",
        },
        cream: {
          DEFAULT: "#F5EEE4",
          light: "#FCF9F5",
          paper: "#EDE4D6",
        },
        brown: {
          DEFAULT: "#5A2410",
          muted: "#7A3B22",
          faint: "rgba(90, 36, 16, 0.4)",
          border: "rgba(90, 36, 16, 0.2)",
        },
        peach: {
          DEFAULT: "#EBCBB8",
          light: "#F5DDD0",
          border: "rgba(196, 69, 20, 0.2)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "3px",
        sm: "2px",
        md: "4px",
      },
      letterSpacing: {
        editorial: "0.16em",
        caps: "0.12em",
      },
      boxShadow: {
        none: "none",
      },
    },
  },
  plugins: [],
};

export default config;
