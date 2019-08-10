const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 4,
  mb: 3
};

export default {
  h1: {
    ...heading,
    fontSize: [5, 6]
  },
  h2: {
    ...heading,
    fontSize: [4, 5]
  },
  p: {
    fontSize: [2, 3]
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
