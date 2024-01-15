/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'docs/*.{html,js}',
  ],
  theme: {
    extend: {
      height: {
        'test': '538px'
      },
      aspectRatio: {
        'mobile-header-aspect': '100/143' //More or less the aspect ratio of header background
      }
    },
  },
  plugins: [],
}

