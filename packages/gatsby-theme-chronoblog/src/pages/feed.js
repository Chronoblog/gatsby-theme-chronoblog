import React from 'react';

import FeedItems from '../components/feed-items';
import FeedSearch from '../components/feed-search';
import FeedTags from '../components/feed-tags';
import Layout from '../components/layout';
import withLocation from '../components/with-location';

const PageFeed = ({ search }) => {
  const { find } = search;
  const { tag } = search;
  return (
    <Layout defaultSearchInput={find} defaultTag={tag}>
      <FeedSearch />
      <FeedTags />
      <FeedItems />
    </Layout>
  );
};

export default withLocation(PageFeed);
