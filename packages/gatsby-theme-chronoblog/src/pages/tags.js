import React from 'react';

import FeedItems from '../components/feed-items';
import FeedSearch from '../components/feed-search';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tags from '../components/tags';

export default () => {
  return (
    <Layout>
      <SEO slug="tags" canonical="tags" />
      <FeedSearch />
      <Tags showAllTagsButton />
      <FeedItems />
    </Layout>
  );
};
