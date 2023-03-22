/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'border-red-600',
    'border-yellow-600',
    'border-blue-600',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial-top': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'triangle': "url('/assets/images/bg-triangle.svg')",
      }
    },
  },
  plugins: [],
}
