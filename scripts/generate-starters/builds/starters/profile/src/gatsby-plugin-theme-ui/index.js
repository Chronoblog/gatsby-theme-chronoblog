import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  colors: {
    ...chronoblogTheme.color,
    text: '#222',
    background: '#fff',
    link: '#25617b',
    primary: '#f5cd79',
    secondary: '#f7d794',
    muted: '#f7f7f7',
    modes: {
      ...chronoblogTheme.colors.modes,
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#eaeaea',
        background: '#0e0f17',
        muted: '#161b1d',
      },
    },
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 8,
    button: 8,
    search: 8,
    code: 8,
    img: 8,
    authorBanner: 8,
  },
  borderWidth: {
    ...chronoblogTheme.borderWidth,
    card: 2,
    search: 2,
  },
  buttons: {
    ...chronoblogTheme.buttons,
    active: {
      ...chronoblogTheme.buttons.buttonStyle,
      color: 'text',
    },
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
};
