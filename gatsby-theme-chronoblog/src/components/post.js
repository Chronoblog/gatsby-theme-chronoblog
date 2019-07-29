/** @jsx jsx */
import { jsx, Main, Styled } from 'theme-ui';

import Footer from './footer';
import Head from './head';
import Header from './header';
import Root from './root';

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
const Post = (props) => {
  return (
    <Root>
      <Head title={props.title} description={props.excerpt} />
      <Header />
      <Main>
        <div
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            px: 3
          }}
        >
          <Styled.h1>{props.title}</Styled.h1>
          <Styled.p
            sx={{
              fontSize: [0, 0],
              fontWeight: 'bold'
            }}
          >
            {props.date}
          </Styled.p>
          {props.draft}
          {props.children}
        </div>
      </Main>
      <Footer />
    </Root>
  );
};

export default Post;
