import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'dark',
  colors: {
    ...chronoblogTheme.color,
    text: '#222',
    background: '#f3f5f3',
    link: '#2e8877',
    primary: '#104c4e',
    secondary: '#1B6A6D',
    muted: '#d5dedb',
    modes: {
      ...chronoblogTheme.colors.modes,
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#eaeaea',
        background: '#080c0a',
        muted: '#161d1c'
      }
    }
  },
  fontSizes: [13, 15, 16, 17, 22, 24, 28, 32],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 3,
    button: 3,
    search: 3,
    code: 3,
    img: 3,
    authorBanner: 3
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body:
      'Source Code Pro, -apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
};
