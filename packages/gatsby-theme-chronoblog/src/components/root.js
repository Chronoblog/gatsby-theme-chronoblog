/** @jsx jsx */
import { Global } from '@emotion/core';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDXProvider } from '@mdx-js/react';
import {
  Avatar,
  Box,
  Embed,
  Flex,
  Link as LinkThemeUi
} from '@theme-ui/components';
import { Link as LinkGatsby } from 'gatsby';
import { useCallback, useState } from 'react';
import { jsx, Layout } from 'theme-ui';

import FeedContext from '../contexts/context-feed';
import AuthorBanner, {
  AuthorBannerAvatar,
  AuthorBannerDescription,
  AuthorBannerHeading
} from './author-banner';
import Button from './button';
import FeedItems from './feed-items';
import FeedSearch from './feed-search';
import LightDarkSwitchButton from './light-dark-switch-button';
import SEO from './seo';
import SocialLinks from './social-links';
import Tags from './tags';

config.autoAddCss = false;
library.add(fab, faEnvelope, faPhone, faAt);

const Link = ({ to, children, ...props }) => (
  <LinkGatsby to={to} {...props}>
    <LinkThemeUi>{children}</LinkThemeUi>
  </LinkGatsby>
);
const A = ({ children, ...props }) => <a {...props}>{children}</a>;
const Div = ({ children, ...props }) => <div {...props}>{children}</div>;

const authorBannerComponents = {
  AuthorBanner,
  AuthorBannerHeading,
  AuthorBannerDescription,
  AuthorBannerAvatar
};

const themeUiComponents = {
  Avatar,
  Box,
  Embed,
  Flex
};

const components = {
  SEO,
  Tags,
  FeedItems,
  FeedSearch,
  SocialLinks,
  LightDarkSwitchButton,
  Button,
  Link,
  A,
  Div,
  FontAwesomeIcon,
  ...themeUiComponents,
  ...authorBannerComponents
};

/**
 * site layout
 *
 * @param {*} props spread props
 */
export default ({ children, ...props }) => {
  //
  const [searchInput, setSearchInput] = useState('');

  const onChangeSearchInput = useCallback((event) => {
    setSearchInput(event.currentTarget.value);
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
            margin: 0,
            overflowWrap: 'break-word',
            wordWrap: 'break-word'
          }
        }}
      />
      <SEO />
      <MDXProvider components={components}>
        <FeedContext.Provider value={{ searchInput, onChangeSearchInput }}>
          {children}
        </FeedContext.Provider>
      </MDXProvider>
    </Layout>
  );
};
