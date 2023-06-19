import { extendTheme } from '@chakra-ui/react';
import { Button, Input } from './chakra-variants';

const colors = {
  brand: {
    800: '#0e2420',
    500: '#2cb59b',
    300: '#27CC7F',
    200: '#E2FFFA',
    100: '#F7FCFC'
  },
  brandPink: {
    100: '#eb9d93'
  },
  brandYellow: {
    300: '#f7ec37'
  },
  brandOrange: {
    50: '#fbfcf1',
    200: '#f9d294'
  },
  brandBlue: {
    200: '#9ed4e6'
  },
  brandGreen: {
    200: '#4db38e',
    300: '#47a060'
  },
  brandGray: {
    50: '#F5F8F7',
    80: '#E4E4E4',
    100: '#DFECE9',
    200: '#B6C0BE',
    400: '#9BA1A0',
    500: '#5B5B5B'
  },
  transparentWhite: {
    200: '#ffffffea',
    300: '#ffffffbb'
  }
};

const fonts = {
  heading: `'Amatic SC', sans-serif`,
  body: `'Amatic SC', sans-serif`
};

const shadows = {
  smooth: `
    0.4px 0.4px 2.2px rgba(0, 0, 0, 0.008),
    0.9px 0.9px 5.3px rgba(0, 0, 0, 0.012),
    1.8px 1.8px 10px rgba(0, 0, 0, 0.015),
    3.1px 3.1px 17.9px rgba(0, 0, 0, 0.018),
    5.8px 5.8px 33.4px rgba(0, 0, 0, 0.022),
    14px 14px 80px rgba(0, 0, 0, 0.03)
`,
  smoothLight: `
  0.4px 0.4px 2.2px rgba(0, 0, 0, 0.003),
  0.9px 0.9px 5.3px rgba(0, 0, 0, 0.004),
  1.8px 1.8px 10px rgba(0, 0, 0, 0.005),
  3.1px 3.1px 17.9px rgba(0, 0, 0, 0.006),
  5.8px 5.8px 33.4px rgba(0, 0, 0, 0.007),
  14px 14px 80px rgba(0, 0, 0, 0.01)
  `,
  smoothLightOffset: `
  1px 1px 2.2px rgba(0, 0, 0, 0.008),
  2.3px 2.4px 5.3px rgba(0, 0, 0, 0.012),
  4.4px 4.5px 10px rgba(0, 0, 0, 0.015),
  7.8px 8px 17.9px rgba(0, 0, 0, 0.018),
  14.6px 15px 33.4px rgba(0, 0, 0, 0.022),
  35px 36px 80px rgba(0, 0, 0, 0.03)
`
};

const components = { Button, Input };

const theme = extendTheme({ colors, fonts, shadows, components });

export default theme;
