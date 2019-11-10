/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { Container, Footer, jsx } from 'theme-ui';

// @ts-ignore
import SiteFooter from '../site-footer.mdx';

export default () => {
  return (
    <Footer
      sx={{
        pt: 30,
        pb: 30
      }}
    >
      <Container>
        <MDXProvider>
          <SiteFooter />
        </MDXProvider>
      </Container>
    </Footer>
  );
};
