import oceanicNext from '@theme-ui/prism/presets/oceanic-next.json';

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 3,
  mb: 2
};

export default {
  Container: {
    px: [2, 3],
    py: 3,
    maxWidth: 768,
    mx: 'auto'
  },
  Footer: {
    color: 'modes.dark.text',
    bg: 'modes.dark.background'
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: 'img'
  },
  Layout: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
  },
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
  },
  h1: {
    ...heading,
    fontSize: [6, 7]
  },
  h2: {
    ...heading,
    fontSize: [5, 6]
  },
  h3: {
    ...heading,
    fontSize: [4, 5]
  },
  h4: {
    ...heading,
    fontSize: [4]
  },
  h5: {
    ...heading,
    fontSize: [3]
  },
  h6: {
    ...heading,
    fontSize: [2]
  },
  p: {
    fontSize: [3]
  },
  li: {
    fontSize: [3]
  },
  a: {
    color: 'link',
    ':hover': {
      opacity: 0.7
    }
  },
  pre: {
    fontFamily: 'monospace',
    fontSize: 1,
    bg: 'muted',
    p: 3,
    borderRadius: 'code',
    overflowX: 'auto',
    variant: 'prism'
  },
  code: {
    ...oceanicNext
  },
  hr: {
    maxWidth: '400px',
    marginY: 40,
    opacity: 0.3,
    borderColor: 'muted'
  },
  blockquote: {
    px: 4,
    py: 1,
    borderRadius: 'blockquote',
    bg: 'muted',
    marginX: 0,
    marginY: 1
  }
};
