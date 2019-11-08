/** @jsx jsx */
import { Global } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { Link as LinkGatsby } from 'gatsby';
import { useCallback, useState } from 'react';
import { Container, jsx, Layout } from 'theme-ui';

import FeedContext from '../contexts/context-feed';
import FeedItems from './feed-items';
import FeedSearch from './feed-search';
import Footer from './footer';
import Header from './header';
import LightDarkSwitchButton from './light-dark-switch-button';
import SEO from './seo';
import Tags from './tags';

const Link = ({ to, ...props }) => <LinkGatsby to={to} {...props} />;
const A = ({ ...props }) => <a {...props} />;

const components = {
  SEO,
  Tags,
  FeedItems,
  FeedSearch,
  LightDarkSwitchButton,
  Link,
  A
};

/**
 * site layout
 *
 * @param {*} props spread props
 */
export default ({ children, ...props }) => {
  //
  const [value, setValue] = useState({
    searchInput: ''
  });

  const onChangeSearchInput = useCallback((event) => {
    setValue({ searchInput: event.currentTarget.value });
  }, []);
  //
  return (
    <Layout {...props}>
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box'
          },
          body: {
            margin: 0
          }
        }}
      />
      <SEO />
      <MDXProvider components={components}>
        <FeedContext.Provider value={{ value, onChangeSearchInput }}>
          <Header />
          <Container
            sx={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}
          >
            {children}
          </Container>
          <Footer />
        </FeedContext.Provider>
      </MDXProvider>
    </Layout>
  );
};
