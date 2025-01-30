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
          DEFAULT: '#2B1810', // dark brown
          light: '#8B7355', // lighter brown
        },
        secondary: {
          DEFAULT: '#E5DDD3', // beige
          dark: '#C2B8A8', // darker beige
        },
        accent: {
          DEFAULT: '#4A4238', // warm gray
          light: '#A69F94', // lighter warm gray
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
