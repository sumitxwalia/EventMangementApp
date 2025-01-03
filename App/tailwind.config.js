/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {},
    fontFamily:{
        UnifrakturCook:['"UnifrakturCook",serif'],
        Quattrocento:['"Quattrocento",serif'],
        Poppins:['"Poppins",serif'],
        Montserrat:['"Montserrat",serif'],
        Inter:['"Inter",serif'],
        Merriweather:['"Merriweather",serif'],
        Cormorant:['"Cormorant Garamond", serif'],
        Silk:['"Silkscreen", serif'],
        Phudu:['"Phudu", serif']
    }
},
  plugins: [],
}

