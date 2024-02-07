/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Caveat: ['Caveat', 'cursive'],
        Archivo: ['Archivo', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};

