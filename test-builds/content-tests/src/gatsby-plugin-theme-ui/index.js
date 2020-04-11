import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'dark',
  colors: {
    ...chronoblogTheme.color,
    text: '#222',
    background: '#f1f2f6',
    link: '#3498db',
    primary: '#8e44ad',
    secondary: '#9b59b6',
    muted: '#dae1e3',
    modes: {
      ...chronoblogTheme.colors.modes,
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#eaeaea',
        background: '#0e0f17',
        muted: '#2c3e50'
      }
    }
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 6,
    button: 6,
    search: 6,
    code: 6,
    img: 6
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: 'Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
};
