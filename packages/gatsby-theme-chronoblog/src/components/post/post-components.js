/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';

export const PostHeader = ({
  data: {
    mdx: {
      id,
      frontmatter: { title, date },
      fields: { slug }
    }
  }
}) => {
  return (
    <header>
      <Styled.h1>{title}</Styled.h1>
      <Styled.p
        sx={{
          fontSize: [0, 0]
        }}
      >
        {id}
      </Styled.p>
      <Styled.p
        sx={{
          fontSize: [0, 0]
        }}
      >
        {slug}
      </Styled.p>
      <Styled.p
        sx={{
          fontSize: [0, 0]
        }}
      >
        {date}
      </Styled.p>
    </header>
  );
};

export const PostContent = ({
  data: {
    mdx: { body }
  }
}) => {
  return <MDXRenderer>{body}</MDXRenderer>;
};
