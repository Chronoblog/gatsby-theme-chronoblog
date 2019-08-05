/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { jsx } from 'theme-ui';

// import { graphql } from 'gatsby';
// import { MDXRenderer } from "gatsby-plugin-mdx"
import useSiteMetadata from '../hooks/use-site-metadata';
// @ts-ignore
import Content from '../siteHeader.mdx';

export default () => {
  const siteMeta = useSiteMetadata();
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
          <Content site={siteMeta} />
        </MDXProvider>
      </div>
    </header>
  );
};
