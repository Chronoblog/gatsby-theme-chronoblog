/** @jsx jsx */
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';
// import BGImage from "./bg-image"

const useCover = (frontmatterCover) => {
  if (
    frontmatterCover &&
    frontmatterCover.childImageSharp &&
    frontmatterCover.childImageSharp.fluid
  )
    return frontmatterCover.childImageSharp.fluid;
  return '';
};

export const PostCover = ({
  data: {
    mdx: { frontmatter }
  }
}) => {
  const coverImage = useCover(frontmatter.cover);
  return <div>{coverImage ? <Img fluid={coverImage} /> : ''}</div>;
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
