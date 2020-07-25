import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  colors: {
    ...chronoblogTheme.color,
    text: '#222',
    background: '#fff',
    link: '#3d7e9a',
    primary: '#3a5f7d',
    secondary: '#5a809e',
    muted: '#dae1e3',
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
    card: 6,
    button: 6,
    search: 6,
    code: 6,
    img: 6,
    authorBanner: 6,
  },
  borderWidth: {
    ...chronoblogTheme.borderWidth,
    card: 2,
    search: 2,
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body:
      'Cambria, "Hoefler Text", Utopia, "PT Serif", "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',
    heading:
      'system, -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monospace:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  text: {
    authorDescription: {
      fontFamily: 'heading',
    },
  },
  links: {
    nav: {
      fontFamily: 'heading',
    },
  },
};
