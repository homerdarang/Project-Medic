/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html', 
//     './src/**/*.{js,ts,jsx,tsx}',
//     './node_modules/flowbite/**/*.js'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: ['flowbite/plugin',],
});

