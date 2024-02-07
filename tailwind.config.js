/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Caveat: ['Caveat', 'cursive'],
        Raleway: ['Raleway', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Archivo: {
          300: ['Archivo-300', 'sans-serif'],
          400: ['Archivo-400', 'sans-serif'],
          500: ['Archivo-500', 'sans-serif'],
          600: ['Archivo-600', 'sans-serif'],
          700: ['Archivo-700', 'sans-serif'],
        },
        Saira: ['Saira', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
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

