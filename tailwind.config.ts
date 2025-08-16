import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'catedralLarge': "url('/Catedral.jpg')",
        'catedralSmall': "url('/CatedralSmall.jpg')",
      },
      keyframes: {
        'reveal-left-to-right-smoothest': {
          '0%': { 'clip-path': 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { 'clip-path': 'inset(0 0 0 0)', opacity: '1' },
        },
        'reveal-right-to-left-smoothest': {
          '0%': { 'clip-path': 'inset(0 0 0 100%)', opacity: '0' },
          '100%': { 'clip-path': 'inset(0 0 0 0)', opacity: '1' },
        },
        'reveal-bottom-to-top-smoothest': {
          '0%': { 'clip-path': 'inset(100% 0 0 0)', opacity: '0' },
          '100%': { 'clip-path': 'inset(0 0 0 0)', opacity: '1' },
        },
        'reveal-top-to-bottom-smoothest': {
          '0%': { 'clip-path': 'inset(0 0 100% 0)', opacity: '0' },
          '100%': { 'clip-path': 'inset(0 0 0 0)', opacity: '1' },
        }
      },
      animation: {
        'reveal-left-to-right-smoothest': 'reveal-left-to-right-smoothest 2s ease-in-out forwards 1s',
        'reveal-right-to-left-smoothest': 'reveal-right-to-left-smoothest 2s ease-in-out forwards 1s',
        'reveal-bottom-to-top-smoothest': 'reveal-bottom-to-top-smoothest 2s ease-in-out forwards',
        'reveal-top-to-bottom-smoothest': 'reveal-top-to-bottom-smoothest 2s ease-in-out forwards',
      },
      dropShadow: {
        'gold': '8px 8px 12px rgba(0, 0, 0, 0.4)',
      },
      maskImage: {
        'radial-fade': 'radial-gradient(circle, transparent 70%, black 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
