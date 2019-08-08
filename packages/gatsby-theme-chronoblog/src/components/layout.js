/** @jsx jsx */
import { jsx, Layout, Main } from 'theme-ui';

import Feed from './feed';
import Footer from './footer';
import Header from './header';
import SEO from './seo';

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
    <Header />
    <Main>
      <div
        sx={{
          maxWidth: 'container',
          mx: 'auto',
          px: 3
        }}
      >
        <article>{children}</article>
        <Feed />
      </div>
    </Main>
    <Footer />
  </Layout>
);
