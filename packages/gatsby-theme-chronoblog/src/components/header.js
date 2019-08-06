/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { jsx } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';
// @ts-ignore
import Content from '../siteHeader.mdx';
import SwitchButton from './switch-button';

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
          py: 2
        }}
      >
        <MDXProvider>
          <Content siteMetadata={siteMetadata} />
        </MDXProvider>
        <div sx={{ mx: 'auto' }} />
        <SwitchButton />
      </div>
    </header>
  );
};
