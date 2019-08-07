/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';

import Layout from './layout';
import SEO from './seo';

/** @typedef { import('react') } React */

const Link = ({
  data: {
    mdx: {
      id,
      body,
      frontmatter: { title, date }
    }
  }
}) => {
  return (
    <Layout>
      <SEO />
      <Styled.h1>{title}</Styled.h1>
      <Styled.p
        sx={{
          fontSize: [0, 0],
          fontWeight: 'bold'
        }}
      >
        {id}
      </Styled.p>
      <Styled.p
        sx={{
          fontSize: [0, 0],
          fontWeight: 'bold'
        }}
      >
        {date}
      </Styled.p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default Link;
