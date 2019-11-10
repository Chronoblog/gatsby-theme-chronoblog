import { MDXProvider } from '@mdx-js/react';
import React from 'react';

// @ts-ignore
import SiteHeader from '../site-header.mdx';

export default () => {
  return (
    <MDXProvider>
      <SiteHeader />
    </MDXProvider>
  );
};
