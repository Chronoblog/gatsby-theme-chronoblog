/** @jsx jsx */
import { jsx, Main, Styled } from 'theme-ui';

import Footer from './footer';
import Header from './header';
import Root from './root';
import SEO from './seo';

/** @typedef { import('react') } React */

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.excerpt
 * @param {string | Date} props.date
 * @param {boolean} props.draft
 * @param {any} props.children
 */
const Post = ({ title, excerpt, date, draft, children }) => {
  return (
    <Root>
      <SEO title={title} description={excerpt} />
      <Header />
      <Main>
        <div
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            px: 3
          }}
        >
          <Styled.h1>{title}</Styled.h1>
          <Styled.p
            sx={{
              fontSize: [0, 0],
              fontWeight: 'bold'
            }}
          >
            {date}
          </Styled.p>
          {draft}
          {children}
        </div>
      </Main>
      <Footer />
    </Root>
  );
};

export default Post;
