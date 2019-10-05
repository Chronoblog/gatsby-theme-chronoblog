import React from 'react';

import FeedItems from '../components/feed-items';
import FeedSearch from '../components/feed-search';
import Layout from '../components/layout';
import Tags from '../components/tags';

export default () => {
  return (
    <Layout>
      <h1>404</h1>
      <FeedSearch />
      <Tags />
      <FeedItems />
    </Layout>
  );
};
