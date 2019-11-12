/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { jsx } from 'theme-ui';

import Root from './root';

export default ({ children }) => {
  return (
    <MDXProvider>
      <Root>{children}</Root>
    </MDXProvider>
  );
};
