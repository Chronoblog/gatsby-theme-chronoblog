/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { Container, Footer, jsx } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';
// @ts-ignore
import SiteFooter from '../site-footer.mdx';

export default () => {
  const siteMetadata = useSiteMetadata();
  return (
    <Footer
      sx={{
        marginY: [30],
        mb: 200
      }}
    >
      <Container>
        <MDXProvider>
          <SiteFooter siteMetadata={siteMetadata} />
        </MDXProvider>
      </Container>
    </Footer>
  );
};
