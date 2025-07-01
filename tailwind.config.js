module.exports = {
  content: [
    './**/*.html',
    './**/*.njk',
    './**/*.js',
    './_includes/**/*.njk',
    './_layouts/**/*.njk',
    '!./_site/**/*',       
    '!./node_modules/**/*'
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
