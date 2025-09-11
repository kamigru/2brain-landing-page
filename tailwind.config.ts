import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",           // #30938b - Verde Teal
          hover: "var(--primary-hover)",      // #25746d - Verde hover
          active: "var(--text-strong)",       // #1f4746 - Verde Oscuro active
          focus: "#267d76",                   // Verde medio focus
        },
        secondary: {
          DEFAULT: "var(--surface-soft)",     // #e2c9d5 - Rosa Pálido
          hover: "#d6b6c3",                   // Rosa más saturado hover
          active: "#c49eae",                  // Rosa más oscuro active
          focus: "var(--text-muted)",         // #b87a98 - Gris Malva focus
        },
        accent: {
          DEFAULT: "var(--accent)",           // #a6597e - Para bg-accent, iconos
          hover: "#f0b3c0",                   // Rosa más saturado hover
          active: "#e89fb0",                  // Rosa más oscuro active
          focus: "#ec8fa5",                   // Rosa medio focus
        },
        text: {
          primary: "var(--text)",             // #000000 - Texto principal
          secondary: "var(--text-muted)",     // #b87a98 - Texto secundario
          accent: "var(--primary)",           // #30938b - Texto de acento
          emphasis: "var(--text-strong)",     // #1f4746 - Texto destacado
          inverse: "var(--surface)",          // #ffffff - Texto sobre fondos oscuros
        },
        surface: {
          DEFAULT: "var(--surface)",          // #ffffff - bg-surface y bg-surface-primary
          dark: "var(--text-strong)",         // #1f4746 - Verde Oscuro - bg-surface-dark
        },
        border: {
          light: "#c5d9d7",                   // Verde muy claro - border-border-light
        },
        // Variables de compatibilidad para Tailwind
        background: "var(--background)",      // #f1e0e9
        foreground: "var(--text-strong)",     // #1f4746
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'Inter', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
