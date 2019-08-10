/** @jsx jsx */
import { Container, jsx } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';
// @ts-ignore
import SiteHeader from '../site-header.mdx';

export default () => {
  const siteMetadata = useSiteMetadata();
  return (
    <header sx={{ variant: 'layout.header' }}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <SiteHeader siteMetadata={siteMetadata} />
      </Container>
    </header>
  );
};
