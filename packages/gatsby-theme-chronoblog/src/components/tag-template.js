/** @jsx jsx */
import { jsx } from 'theme-ui';

import FeedItems from './feed-items';
import FeedSearch from './feed-search';
import Layout from './layout';
import SEO from './seo';
import Tags from './tags';

export default ({ pageContext }) => {
  const tag = pageContext.tag || '';

  return (
    <Layout>
      <SEO canonical="tags" />
      <FeedSearch />
      <Tags pageContextTag={pageContext.tag || 'tags'} />
      <FeedItems filterByTag={tag} />
    </Layout>
  );
};
