/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{svelte, html, js,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
],
  theme: {
    colors:{
      'normal': 'rgb(173, 173, 173)',
      'white': '#ffffff',
      'blue-black': '#081534',
      'gris': ' #c6c6c6',
      'blue-medium': '#133a7c',
      'blue': '#2a6bac',
      'blue-white': '#47a8e5',
      primary: {
        50: '#FFF5F2',
        100: '#FFF1EE',
        200: '#FFE4DE',
        300: '#FFD5CC',
        400: '#FFBCAD',
        500: '#FE795D',
        600: '#EF562F',
        700: '#EB4F27',
        800: '#CC4522',
        900: '#A5371B'
      }

    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Gotham: ['Gotham', 'sans-serif'],
      Helvetica: ['Helvetica Neue', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

