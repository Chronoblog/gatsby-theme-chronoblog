import base from '@theme-ui/preset-base';
import prism from '@theme-ui/prism/presets/theme-ui';

import buttons from './buttons';
import colors from './colors';
import styles from './styles';

const theme = {
  ...base,
  initialColorMode: 'light',
  useColorSchemeMediaQuery: false,
  colors: {
    ...colors
  },
  breakpoints: ['768px', '1024px'],
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    card: 6,
    button: 6,
    search: 6,
    code: 6,
    img: 6,
    authorBanner: 6,
    blockquote: 6
  },
  borderWidth: {
    card: 2,
    search: 2
  },
  fonts: {
    body: '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  prism,
  styles: {
    ...base.styles,
    ...styles
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'primary'
    },
    tags: {
      color: 'inherit',
      bg: 'transparent',
      opacity: 0.7
    }
  },
  buttons: {
    ...buttons
  },
  images: {
    avatar: {
      width: 140,
      height: '100%',
      borderRadius: 99999
    }
  }
};

export default theme;
