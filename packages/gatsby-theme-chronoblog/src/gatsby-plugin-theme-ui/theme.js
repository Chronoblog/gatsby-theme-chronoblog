import { base } from '@theme-ui/presets';

import colors from './colors';
import styles from './styles';

const theme = {
  ...base,
  initialColorMode: 'light',
  colors: {
    ...colors
  },
  styles: {
    ...base.styles,
    ...styles
  },
  sizes: {
    container: 768
  }
};

export default theme;
