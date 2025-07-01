module.exports = {
  content: [
    './**/*.html',
    './**/*.njk',
    './**/*.js',
    './_includes/**/*.njk',
    './_layouts/**/*.njk',
  ],
  safelist: [],
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      colors: {
        'einstein-blue': '#003b7d',
      },
    },
  },
  plugins: [],
}
