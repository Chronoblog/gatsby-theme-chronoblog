import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  colors: {
    ...chronoblogTheme.color,
    text: '#000',
    background: '#fff',
    link: '#3d7e9a',
    primary: '#3a5f7d',
    secondary: '#5a809e',
    muted: '#dae1e3',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        muted: '#161b1d'
      }
    }
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  fonts: {
    ...chronoblogTheme.fonts,
    body: '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
};
