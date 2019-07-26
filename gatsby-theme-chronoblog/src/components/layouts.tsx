/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Main, Styled } from 'theme-ui';

import Footer from './footer';
import Head from './head';
import Header from './header';
import Root from './root';

interface Props {
  pageContext: {
    previous?: string;
    next?: string;
  };
}

export default (props: Props): JSX.Element => {
  const { pageContext, posts } = props;
  const { previous, next } = pageContext;

  return (
    <Root>
      <Head />
      <Header />
      <Main>
        <div
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            px: 3
          }}
        >
          <ul
            sx={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}
          >
            {posts.map(
              (post): JSX.Element => (
                <li key={post.id}>
                  <Link
                    to={post.slug}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                  >
                    <Styled.h2
                      sx={{
                        fontSize: [5, 6]
                      }}
                    >
                      {post.title}
                    </Styled.h2>
                    <Styled.p
                      sx={{
                        mb: 4,
                        fontSize: [0, 0],
                        fontWeight: 'bold'
                      }}
                    >
                      {post.date}
                    </Styled.p>
                    <Styled.p>{post.excerpt}</Styled.p>
                  </Link>
                </li>
              )
            )}
          </ul>
          <div
            sx={{
              display: 'flex'
            }}
            py={4}
          >
            {previous && (
              <Styled.a
                as={Link}
                to={previous}
                sx={{
                  fontSize: 4,
                  fontWeight: 'bold',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                Previous
              </Styled.a>
            )}
            <div sx={{ m: 'auto' }} />
            {next && (
              <Styled.a
                as={Link}
                to={next}
                sx={{
                  fontSize: 4,
                  fontWeight: 'bold',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                Next
              </Styled.a>
            )}
          </div>
        </div>
      </Main>
      <Footer />
    </Root>
  );
};
