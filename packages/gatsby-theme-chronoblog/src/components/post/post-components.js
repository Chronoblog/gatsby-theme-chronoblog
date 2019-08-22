/** @jsx jsx */
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';
// import BGImage from "./bg-image"

const useCover = (frontmatter) => {
  if (
    frontmatter &&
    frontmatter.cover &&
    frontmatter.cover.childImageSharp &&
    frontmatter.cover.childImageSharp.fluid
  )
    return frontmatter.cover.childImageSharp.fluid;
  return '';
};

export const PostCover = ({
  data: {
    mdx: { frontmatter }
  }
}) => {
  const coverImage = useCover(frontmatter);
  return (
    <div>
      {coverImage && coverImage !== '' ? <Img fluid={coverImage} /> : ''}
    </div>
  );
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
