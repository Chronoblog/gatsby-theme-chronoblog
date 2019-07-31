import colors from './colors';
import styles from './styles';

const theme = {
  initialColorMode: 'light',
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  sizes: {
    container: 768
  },
  styles
};

export default theme;
