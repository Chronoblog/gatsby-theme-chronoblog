/** @jsx jsx */
import { jsx } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';
// @ts-ignore
import SiteHeader from '../site-header.mdx';

export default () => {
  const siteMetadata = useSiteMetadata();
  return (
    <header sx={{ variant: 'layout.header' }}>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: 'container',
          mx: 'auto',
          px: 3,
          py: 3
        }}
      >
        <SiteHeader siteMetadata={siteMetadata} />
      </div>
    </header>
  );
};
