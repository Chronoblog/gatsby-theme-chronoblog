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
  h3: {
    ...heading,
    fontSize: 3
  },
  h4: {
    ...heading,
    fontSize: 2
  },
  h5: {
    ...heading,
    fontSize: 1
  },
  h6: {
    ...heading,
    fontSize: 0
  },
  p: {
    fontSize: [2, 3],
    m: 0,
    mb: 4
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
  },
  hr: {
    mt: 5,
    mb: 5,
    border: 0,
    borderBottom: '1px solid'
  },
  pre: {
    fontFamily: 'monospace',
    p: 3,
    color: 'secondary',
    bg: 'muted',
    borderRadius: 4,
    overflowX: 'auto'
  },
  code: {
    fontFamily: 'monospace'
  },
  inlineCode: {
    fontFamily: 'monospace',
    color: 'secondary'
  },
  strong: {
    fontWeight: 'bold'
  },
  table: {
    width: '100%',
    my: 4,
    borderCollapse: 'separate',
    borderSpacing: 0
  },
  th: {
    textAlign: 'left',
    verticalAlign: 'bottom',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingRight: '4px',
    paddingLeft: 0,
    borderColor: 'inherit',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid'
  },
  td: {
    textAlign: 'left',
    verticalAlign: 'top',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingRight: '4px',
    paddingLeft: 0,
    borderColor: 'inherit',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid'
  }
};
