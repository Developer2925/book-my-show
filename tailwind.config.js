/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mycolor: // Added my own color pallete
        {
          50: '#defcfa',
          100: '#beeeea',
          200: '#9be0dc',
          300: '#77d3cd',
          400: '#52c6be',
          500: '#39ada5',
          600: '#288680',
          700: '#19615c',
          800: '#053b38',
          900: '#001614',
        },
        navColor:
        {
          50: '#edf0fe',
          100: '#ced2e6',
          200: '#afb4d0',
          300: '#8f95bc',
          400: '#6f77a8',
          500: '#565e8f',
          600: '#434970',
          700: '#303451',
          800: '#1c1f33',
          900: '#090917',
        },
        bgPremiere:
        {
          1: '#2B3148',
          50: '#edf0fd',
          100: '#ced3e5',
          200: '#afb6cf',
          300: '#9099bb',
          400: '#707ba7',
          500: '#57628e',
          600: '#444c6f',
          700: '#303650',
          800: '#1c2132',
          900: '#080b17',
        },
        bgMovie: {
          1: '#282626'
        },
        bgBtn: {
          1: '#F31559'
        },
        bgOffr: {
          1: '#FFEBC1'
        },
        linktext: {
          1: '#DC354B'
        }
      }
    },
  },
  plugins: [],
}