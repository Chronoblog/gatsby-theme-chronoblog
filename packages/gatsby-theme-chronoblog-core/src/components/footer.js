import { MDXProvider } from '@mdx-js/react';
import React from 'react';

// @ts-ignore
import SiteFooter from '../site-footer.mdx';

export default () => {
  return (
    <MDXProvider>
      <SiteFooter />
    </MDXProvider>
  );
};
