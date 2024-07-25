/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'SoftOrange': 'hsl(35, 77%, 62%)',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    forms
  ],
}
