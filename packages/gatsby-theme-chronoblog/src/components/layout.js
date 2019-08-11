/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { Container, jsx, Layout, Main } from 'theme-ui';

import Feed from './feed';
import Footer from './footer';
import Header from './header';
import LightDarkSwitchButton from './light-dark-switch-button';
import SEO from './seo';
import SiteHeaderTitle from './site-header-title';

const components = { Feed, LightDarkSwitchButton, SiteHeaderTitle };

/**
 *
 * @param {*} props spread props
 */
export default ({ children, ...props }) => (
  <Layout {...props}>
    <SEO />
    <MDXProvider components={components}>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </MDXProvider>
  </Layout>
);
