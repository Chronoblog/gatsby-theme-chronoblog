import React from 'react';

import Container from './container';
import Footer from './footer';
import Header from './header';
import Root from './root';

export default ({ children }) => {
  return (
    <Root>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Root>
  );
};
