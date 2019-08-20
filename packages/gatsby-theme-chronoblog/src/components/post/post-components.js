/** @jsx jsx */
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';
// import BGImage from "./bg-image"

export const PostCover = ({ image }) => {
  return <div>{image ? <Img fluid={image} /> : ''}</div>;
};

export const PostTitle = ({
  data: {
    mdx: { frontmatter }
  }
}) => {
  return (
    <div>
      {frontmatter.title ? <Styled.h1>{frontmatter.title}</Styled.h1> : ''}
    </div>
  );
};

export const PostContent = ({
  data: {
    mdx: { body }
  }
}) => {
  return <MDXRenderer>{body}</MDXRenderer>;
};
