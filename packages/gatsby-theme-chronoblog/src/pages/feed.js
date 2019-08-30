import get from 'lodash/get';
import React from 'react';

import FeedItems from '../components/feed-items';
import FeedSearch from '../components/feed-search';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tags from '../components/tags';

const PageFeed = ({ location }) => {
  const tagFromLink = get(location, 'state.tag', '');
  return (
    <Layout>
      <SEO slug="feed" canonical="feed" />
      <FeedSearch />
      <Tags />
      <FeedItems filterByTag={tagFromLink} />
    </Layout>
  );
};

export default PageFeed;
