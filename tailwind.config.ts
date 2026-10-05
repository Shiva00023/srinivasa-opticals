import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { burgundy: "var(--burgundy)", beige: "var(--beige)", cream: "var(--cream)", softblue: "var(--soft-blue)", ink: "var(--ink)" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui"], serif: ["var(--font-serif)", "Georgia"] },
  } },
  plugins: [],
} satisfies Config;
