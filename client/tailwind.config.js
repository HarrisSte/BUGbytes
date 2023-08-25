/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite/plugin';
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js, jsx, ts, tsx}',
    './node_modules/flowbite-react/**/*.{js, jsx, ts, tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};