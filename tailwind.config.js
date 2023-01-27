module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
      './assets/**/*.{vue,js,css}',
      './components/*.{vue,js}',
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
    ],
    theme: {
      container: {
        center: true,
        screens: {
          '2xl': '1240px'
        }
      },
      fontFamily: {
        sans: ['Poppins'],
        display: ['Chewy'],
      },
      extend: {
        colors: {
          'primary': '#f9b672',
          'primary-lighter': '#ffd2a6',
          'primary-darker': '#e5a15c',
          'mc-blue': '#063144' ,
          'mc-blue-darker': '#00060b',
          'mc-lightblue': '#3696cc',
          'mc-waikawa': '#5969A9',
          'mc-persian-rose': '#FF36AB',
          'mc-fern': '#54B872',
          'mc-glacier': '#76B5C5'
        },
      },
    },
    plugins: [],
    safelist:  [
        "grid-cols-2"
    ]
  }