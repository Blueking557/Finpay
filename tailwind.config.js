/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#2D9B9B',
          'teal-light': '#3DADA9',
          'teal-dark': '#1F7A7A',
        },
        navy: {
          dark: '#0A2540',
          DEFAULT: '#1A3B5C',
        },
        gray: {
          light: '#F7F9FB',
          DEFAULT: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}


