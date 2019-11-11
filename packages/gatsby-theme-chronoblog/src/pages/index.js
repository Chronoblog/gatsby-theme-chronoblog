import React from 'react';

import FeedItems from '../components/feed-items';
import FeedSearch from '../components/feed-search';
import Layout from '../components/layout';
import Tags from '../components/tags';

export default () => {
  return (
    <Layout>
      <FeedSearch />
      <Tags />
      <FeedItems />
    </Layout>
  );
};
