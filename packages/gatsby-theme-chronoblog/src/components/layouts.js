/** @jsx jsx */
import { jsx, Main } from 'theme-ui';

import Feed from './feed';
import Footer from './footer';
import Header from './header';
import Pagination from './pagination';
import Root from './root';
import SEO from './seo';

/**
 * @typedef {object} Props
 * @property {*} posts
 * @property {object} pageContext
 * @property {string} pageContext.previous
 * @property {string} pageContext.next
 */

/**
 * @param {Props} props
 */
export default ({ pageContext, posts }) => {
  return (
    <Root>
      <SEO />
      <Header />
      <Main>
        <div
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            px: 3
          }}
        >
          <Feed posts={posts} />
          <Pagination pageContext={pageContext} />
        </div>
      </Main>
      <Footer />
    </Root>
  );
};
