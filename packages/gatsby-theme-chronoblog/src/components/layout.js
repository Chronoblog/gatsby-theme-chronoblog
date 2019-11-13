/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { Container, jsx } from 'theme-ui';

import Footer from './footer';
import Header from './header';
import Root from './root';

export default ({ children }) => {
  return (
    <MDXProvider>
      <Root>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Root>
    </MDXProvider>
  );
};
