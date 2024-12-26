const defaultTheme = require('tailwindcss/defaultTheme')
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: [],
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Kufi Arabic', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // 'madinati-red' : {
        //   DEFAULT: '#D7244B',
        //   '50': '#F4BECA',
        //   '100': '#F1ADBC',
        //   '200': '#EB8A9F',
        //   '300': '#E66783',
        //   '400': '#E04466',
        //   '500': '#D7244B',
        //   '600': '#A71C3A',
        //   '700': '#771429',
        //   '800': '#470C19',
        //   '900': '#170408'
        // },
        'libya-pink' : {
          DEFAULT: '#BA3167',
          '50': '#ECB7CC',
          '100': '#E8A7C0',
          '200': '#DF86A9',
          '300': '#D76692',
          '400': '#CE467B',
          '500': '#BA3167',
          '600': '#8E254E',
          '700': '#611A36',
          '800': '#350E1D',
          '900': '#080205'
        },
        'libya-blue': {
          DEFAULT: '#293C8B',
          '50': '#8E9DDE',
          '100': '#7E90D9',
          '200': '#5F75D0',
          '300': '#3F59C6',
          '400': '#324AAB',
          '500': '#293C8B',
          '600': '#1C2960',
          '700': '#0F1734',
          '800': '#030409',
          '900': '#000000'
        },
      },
      typography: {
        DEFAULT: {
          css: [
            {
              blockquote: {
                borderRightWidth: '0.25rem',
                borderLeftWidth: 0,
              },
              'ol > li': {
                paddingRight: em(28, 16),
                paddingLeft: 0,
              },
              'ol > li::before': {
                right: em(4, 16),
                left: `auto`,
              },
              'ul > li': {
                paddingRight: em(28, 16),
                paddingLeft: 0,
              },
              'ul > li::before': {
                right: em(4, 16),
                left: `auto`,
              },
            },
            {
              blockquote: {
                paddingRight: em(20, 20),
                paddingLeft: 0,
              },
              'thead th:first-child': {
                paddingRight: '0',
              },
              'thead th:last-child': {
                paddingLeft: '0',
              },
              'tbody td:first-child': {
                paddingRight: '0',
              },
              'tbody td:last-child': {
                paddingLeft: '0',
              },
            },
          ],
        },
        sm: {
          css: [
            {
              blockquote: {
                borderRightWidth: '0.25rem',
                borderLeftWidth: 0,
              },
              'ol > li': {
                paddingRight: em(22, 14),
                paddingLeft: 0,
              },
              'ol > li::before': {
                right: em(3, 14),
                left: `auto`,
              },
              'ul > li': {
                paddingRight: em(22, 14),
                paddingLeft: 0,
              },
              'ul > li::before': {
                right: em(3, 14),
                left: `auto`,
              },
            },
            {
              blockquote: {
                paddingRight: em(20, 18),
                paddingLeft: 0,
              },
              'thead th:first-child': {
                paddingRight: '0',
              },
              'thead th:last-child': {
                paddingLeft: '0',
              },
              'tbody td:first-child': {
                paddingRight: '0',
              },
              'tbody td:last-child': {
                paddingLeft: '0',
              },
            },
          ],
        },
        lg: {
          css: [
            {
              blockquote: {
                borderRightWidth: '0.25rem',
                borderLeftWidth: 0,
              },
              'ol > li': {
                paddingRight: em(30, 18),
                paddingLeft: 0,
              },
              'ol > li::before': {
                right: em(4, 18),
                left: `auto`,
              },
              'ul > li': {
                paddingRight: em(30, 18),
                paddingLeft: 0,
              },
              'ul > li::before': {
                right: em(4, 18),
                left: `auto`,
              },
            },
            {
              blockquote: {
                paddingRight: em(24, 24),
                paddingLeft: 0,
              },
              'thead th:first-child': {
                paddingRight: '0',
              },
              'thead th:last-child': {
                paddingLeft: '0',
              },
              'tbody td:first-child': {
                paddingRight: '0',
              },
              'tbody td:last-child': {
                paddingLeft: '0',
              },
            },
          ],
        },
        xl: {
          css: [
            {
              blockquote: {
                borderRightWidth: '0.25rem',
                borderLeftWidth: 0,
              },
              'ol > li': {
                paddingRight: em(36, 20),
                paddingLeft: 0,
              },
              'ol > li::before': {
                right: em(5, 20),
                left: `auto`,
              },
              'ul > li': {
                paddingRight: em(36, 20),
                paddingLeft: 0,
              },
              'ul > li::before': {
                right: em(5, 20),
                left: `auto`,
              },
            },
            {
              blockquote: {
                paddingRight: em(32, 30),
                paddingLeft: 0,
              },
              'thead th:first-child': {
                paddingRight: '0',
              },
              'thead th:last-child': {
                paddingLeft: '0',
              },
              'tbody td:first-child': {
                paddingRight: '0',
              },
              'tbody td:last-child': {
                paddingLeft: '0',
              },
            },
          ],
        },
        '2xl': {
          css: [
            {
              blockquote: {
                borderRightWidth: '0.25rem',
                borderLeftWidth: 0,
              },
              'ol > li': {
                paddingRight: em(40, 24),
                paddingLeft: 0,
              },
              'ol > li::before': {
                right: em(6, 24),
                left: `auto`,
              },
              'ul > li': {
                paddingRight: em(40, 24),
                paddingLeft: 0,
              },
              'ul > li::before': {
                right: em(6, 24),
                left: `auto`,
              },
            },
            {
              blockquote: {
                paddingRight: em(40, 36),
                paddingLeft: 0,
              },
              'thead th:first-child': {
                paddingRight: '0',
              },
              'thead th:last-child': {
                paddingLeft: '0',
              },
              'tbody td:first-child': {
                paddingRight: '0',
              },
              'tbody td:last-child': {
                paddingLeft: '0',
              },
            },
          ],
        },
      },
    },
  },
  plugins: [    require('@tailwindcss/aspect-ratio'),require("tailwindcss-flip"), require('@tailwindcss/typography')],
};
