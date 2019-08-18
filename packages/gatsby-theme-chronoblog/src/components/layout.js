/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { useCallback, useState } from 'react';
import { Container, jsx, Layout } from 'theme-ui';

import FeedContext from '../contexts/context-feed';
import FeedItems from './feed-items';
import FeedSearch from './feed-search';
import FeedTags from './feed-tags';
import Footer from './footer';
import Header from './header';
import LightDarkSwitchButton from './light-dark-switch-button';
import SEO from './seo';
import SiteHeaderTitle from './site-header-title';

const components = {
  FeedTags,
  FeedItems,
  FeedSearch,
  LightDarkSwitchButton,
  SiteHeaderTitle
};

/**
 * site layout
 *
 * @param {*} props spread props
 */
export default ({
  defaultSearchInput = '',
  defaultTag = '',
  children,
  ...props
}) => {
  //
  const [value, setValue] = useState({
    searchInput: defaultSearchInput,
    tag: defaultTag
  });

  const onChangeSearchInput = useCallback((event) => {
    setValue({ searchInput: event.currentTarget.value, tag: '' });
  }, []);
  const onChangeTag = useCallback(
    (event) => {
      // when click the same tag - disables it
      if (value.tag === event.currentTarget.value) {
        setValue({ searchInput: '', tag: '' });
      } else {
        setValue({ searchInput: '', tag: event.currentTarget.value });
      }
    },
    [value.tag]
  );
  //
  return (
    <Layout {...props}>
      <SEO />
      <MDXProvider components={components}>
        <FeedContext.Provider
          value={{ value, onChangeSearchInput, onChangeTag }}
        >
          <Header />
          <Container>{children}</Container>
          <Footer />
        </FeedContext.Provider>
      </MDXProvider>
    </Layout>
  );
};
