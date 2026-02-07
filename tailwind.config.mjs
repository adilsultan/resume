/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#e5e5e5',
          100: '#a3a3a3',
          200: '#737373',
          300: '#525252',
          400: '#404040',
          500: '#262626',
          600: '#1a1a1a',
          700: '#141414',
          800: '#111111',
          900: '#0a0a0a',
        },
        accent: {
          DEFAULT: '#d4a647',
          hover: '#e6b84d',
          muted: '#3d2e10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '720px',
      },
    },
  },
  plugins: [],
};
