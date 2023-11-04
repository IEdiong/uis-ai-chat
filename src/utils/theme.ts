// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    600: '#0095A9FF',
    100: '#EBFDFFFF',
    700: '#2a69ac',
  },
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
};

export const theme = extendTheme({
  colors,
  fonts,
});
