const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 4,
  mb: 3
};

export default {
  Container: {
    p: 3,
    maxWidth: 768,
    mx: 'auto'
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
    fontSize: [6]
  },
  h2: {
    ...heading,
    fontSize: [5]
  },
  h3: {
    ...heading,
    fontSize: [4]
  },
  h4: {
    ...heading,
    fontSize: [3]
  },
  h5: {
    ...heading,
    fontSize: [2]
  },
  h6: {
    ...heading,
    fontSize: [1]
  },
  p: {
    fontSize: [2]
  },
  a: {
    color: 'primary',
    '&:hover': {
      color: 'secondary'
    }
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  }
};
