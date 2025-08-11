/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#121212',
        'darker': '#000000',
        'light': '#F5F5F7',
        'light-gray': '#FAFAFA',
        'accent': '#007AFF', // Apple Blue
        'gray-text': '#6E6E73',
        'gray-text-dark': '#8A8A8E',
      }
    },
  },
  plugins: [],
}
