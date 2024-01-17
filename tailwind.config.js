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
      },
      fontFamily: {
        'fraunces': 'Fraunces'
      },
      letterSpacing: {
        'mainHeadingSpacing': '0.2rem',
        'testimonialsSpacing': '0.3rem'
      },
      fontSize: {
        'mainHeadingSize': '2.7rem'
      },
      lineHeight: {
        'mainHeadingLineHeight': '1.1'
      },
      inset: {
        'headingAndArrowBottom': '8.5rem'
      },
      colors: {
        'gray': 'hsl(213, 9%, 39%)',
        'lightGray': 'hsl(210, 4%, 67%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'lightYellow': 'hsla(51, 100%, 49%, 0.3)',
        'softRed': 'hsl(7, 99%, 70%)',
        'lightSoftRed': 'hsla(7, 99%, 70%, 0.3)',
        'graphicDesignColor': 'hsl(167, 40%, 24%)',
        'photographyColor': 'hsl(198, 62%, 26%)',
        'darkestBlue': 'hsl(212, 27%, 19%)',
        'darkModerateCyan': 'hsl(168, 34%, 35%)',
        'lightGreen': 'rgb(169, 215, 205)'
      },
      spacing: {
        '40px': '40px'
      }
    },
  },
  plugins: [],
}

