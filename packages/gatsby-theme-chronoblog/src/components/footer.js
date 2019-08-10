/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { Container, jsx } from 'theme-ui';

// @ts-ignore
import Content from '../site-footer.mdx';

export default () => (
  <footer>
    <Container>
      <MDXProvider>
        <Content />
      </MDXProvider>
    </Container>
  </footer>
);
