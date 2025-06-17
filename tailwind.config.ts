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
          hover: "var(--primary-accent)",     // #5b8b86 - Verde Claro hover
          accent: "var(--primary-accent)",    // #5b8b86 - Para bg-primary-accent
          active: "var(--text-emphasis)",     // #275a58 - Verde Oscuro active
          focus: "#267d76",                   // Verde medio focus
        },
        secondary: {
          DEFAULT: "var(--secondary)",        // #e2c9d5 - Rosa Pálido
          hover: "#d6b6c3",                   // Rosa más saturado hover
          active: "#c49eae",                  // Rosa más oscuro active
          focus: "var(--text-secondary)",     // #c5b8ba - Gris Malva focus
        },
        accent: {
          DEFAULT: "var(--text-accent)",      // #30938b - Para bg-accent, text-accent
          hover: "#f0b3c0",                   // Rosa más saturado hover
          active: "#e89fb0",                  // Rosa más oscuro active
          focus: "#ec8fa5",                   // Rosa medio focus
        },
        text: {
          primary: "var(--text-primary)",     // #000000 - Texto principal
          secondary: "var(--text-secondary)", // #c5b8ba - Texto secundario
          accent: "var(--text-accent)",       // #30938b - Texto de acento
          emphasis: "var(--text-emphasis)",   // #275a58 - Texto destacado
          inverse: "var(--text-inverse)",     // #ffffff - Texto sobre fondos oscuros
          // Clases anidadas para text-text-*
          text: {
            primary: "var(--text-primary)",   // Para text-text-primary
            secondary: "var(--text-secondary)", // Para text-text-secondary
            accent: "var(--text-accent)",     // Para text-text-accent
            emphasis: "var(--text-emphasis)", // Para text-text-emphasis
            inverse: "var(--text-inverse)",   // Para text-text-inverse
          },
        },
        surface: {
          DEFAULT: "var(--surface-primary)",  // #ffffff - bg-surface
          primary: "var(--surface-primary)",  // #ffffff - bg-surface-primary
          dark: "#275a58",                    // Verde Oscuro - bg-surface-dark
        },
        border: {
          light: "#c5d9d7",                   // Verde muy claro - border-border-light
        },
        // Variables de compatibilidad para Tailwind
        background: "var(--background)",      // #e2c9d5
        foreground: "var(--foreground)",      // #275a58
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
