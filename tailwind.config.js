/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Caveat: ['Caveat', 'cursive'],
        Raleway: ['Raleway', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Garnett: ['Garnett Semibold Regular'],
        Archivo: {
          300: ['Archivo-300', 'sans-serif'],
          400: ['Archivo-400', 'sans-serif'],
          500: ['Archivo-500', 'sans-serif'],
          600: ['Archivo-600', 'sans-serif'],
          700: ['Archivo-700', 'sans-serif'],
        },
        Archivo: ['Archivo', 'sans-serif'],
        Saira: ['Saira', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-top': 'infinite-scroll-top 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-top': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        }
      },
    },
  },
  plugins: [],
};

