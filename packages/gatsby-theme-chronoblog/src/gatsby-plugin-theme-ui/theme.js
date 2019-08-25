import base from '@theme-ui/preset-base';

import colors from './colors';
import styles from './styles';

const theme = {
  ...base,
  initialColorMode: 'light',
  colors: {
    ...colors
  },
  fontSizes: [14, 16, 18, 20, 24, 26, 28, 36],
  borderRadius: [6],
  fonts: {
    body: '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  styles: {
    ...base.styles,
    ...styles
  }
};

export default theme;
