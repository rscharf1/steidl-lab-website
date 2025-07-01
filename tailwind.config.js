module.exports = {
  content: [
    './**/*.html',
    './**/*.njk',
    './**/*.js',
    './_includes/**/*.njk',
    './_layouts/**/*.njk',
  ],
  safelist: [
    'bg-gradient-to-br from-emerald-600 to-lime-300',
    'bg-gradient-to-br from-rose-400 to-indigo-500',
    'bg-gradient-to-br from-gray-900 to-gray-300',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
