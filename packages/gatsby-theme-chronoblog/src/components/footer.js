/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { Container, Footer, jsx } from 'theme-ui';

// @ts-ignore
import Content from '../site-footer.mdx';

export default () => (
  <Footer>
    <Container>
      <MDXProvider>
        <Content />
      </MDXProvider>
    </Container>
  </Footer>
);
