/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { jsx, Layout, Main } from 'theme-ui';

import Feed from './feed';
import Footer from './footer';
import Header from './header';
import HeaderTitle from './header-title';
import SEO from './seo';
import SwitchButton from './switch-button';

const components = { Feed, SwitchButton, HeaderTitle };

/**
 *
 * @param {*} props spread props
 */
export default ({ children, ...props }) => (
  <Layout
    {...props}
    sx={{
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }}
  >
    <SEO />
    <MDXProvider components={components}>
      <Header />
      <Main>
        <div
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            px: 3
          }}
        >
          {children}
        </div>
      </Main>
      <Footer />
    </MDXProvider>
  </Layout>
);
