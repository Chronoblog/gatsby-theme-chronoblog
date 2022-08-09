import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';
import "@fontsource/raleway" 

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  colors: {
    ...chronoblogTheme.color,
    text: '#222',
    background: '#fff',
    link: '#777777',
    primary: '#3a5f7d',
    secondary: 'rgb(90, 128, 158,0.3)',
    muted: '#f0f3f4',
    modes: {
      ...chronoblogTheme.colors.modes,
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#eaeaea',
        background: '#0e0f17',
        muted: '#161b1d',
        link: '#60a5fa',
      },
    },
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 6,
    button: 10,
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
    body: '-apple-system,BlinkMacSystemFont,raleway,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
};
