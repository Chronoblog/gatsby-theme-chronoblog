const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 4,
  mb: 3
};

export default {
  Container: {
    px: 3,
    py: 3,
    maxWidth: 768,
    mx: 'auto'
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
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
    color: 'primary',
    ':hover': {
      color: 'secondary',
      opacity: 0.8
    }
  }
};
