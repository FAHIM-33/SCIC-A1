
/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

    extend: {
      colors: {
        low: 'var(--color-low)',
        mid: 'var(--color-mid)',
        high: 'var(--color-high)',
        crim: 'var(--color-crim)',
        background: 'var(--color-background)',
        fadegray : '#8f8f8f2d'
      },
    },
  },
  plugins: [],
}