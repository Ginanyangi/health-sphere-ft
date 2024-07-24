/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-color)',
        text: 'var(--text-color)',
        secondaryText: 'var(--secondary-text-color)',
        primary: 'var(--primary-color)',
      },
    },
  },
  plugins: [],
}

