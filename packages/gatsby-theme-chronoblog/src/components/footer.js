/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { jsx } from 'theme-ui';

// @ts-ignore
import Content from '../site-footer.mdx';

export default () => (
  <footer>
    <div
      sx={{
        maxWidth: 'container',
        mx: 'auto',
        px: 3,
        py: 3
      }}
    >
      <MDXProvider>
        <Content />
      </MDXProvider>
    </div>
  </footer>
);
