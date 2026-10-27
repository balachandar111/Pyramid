/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#161616',
        brand: {
          DEFAULT: '#FF8F0F',
          deep: '#B85800',
          soft: '#FFF2E0',
        },
        sand: '#F5F4F0',
        line: '#E3E1DA',
        mute: '#5E5C56',
      },
      fontFamily: {
        display: ['Archivo', 'Arial Narrow', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
