import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  useColorSchemeMediaQuery: false,
  colors: {
    ...chronoblogTheme.colors,
    text: '#000',
    background: '#fff',
    primary: '#3a5f7d',
    secondary: '#5a809e',
    muted: '#dae1e3',
    modes: {
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#fff',
        background: '#000',
        muted: '#161b1d'
      }
    }
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
};
