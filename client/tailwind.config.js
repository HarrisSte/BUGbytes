/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
module.exports = {
  content: [
    './src/**/*.{js, jsx, ts, tsx}',
    './node_modules/flowbite-react/**/*.{js, jsx, ts, tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
