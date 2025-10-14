/** @type {import('tailwindcss').Config} */
export default {
 content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    fontFamily: {
      'myfont': ['MyFont', 'chubby bear'],
      'sansita': ['sansita swashed']
    }
  },
},
plugins: [],

}

