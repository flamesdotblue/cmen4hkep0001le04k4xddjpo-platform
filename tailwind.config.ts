import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFC6',
        accent: '#7C7CFF',
        dark: '#0A0A0F',
        darkElev: '#0F1117'
      },
      fontFamily: {
        sans: ["Inter", 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji']
      },
      boxShadow: {
        neon: '0 0 20px rgba(0,255,198,0.35), 0 0 40px rgba(124,124,255,0.2)'
      },
      backgroundImage: {
        grid: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: '20px 20px',
      }
    },
  },
  plugins: [],
} satisfies Config
