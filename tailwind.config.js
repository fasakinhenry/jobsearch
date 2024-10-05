/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': 'url("/src/assets/grid.svg")', // For grid effect
      },
    },
  },
  plugins: [],
};
