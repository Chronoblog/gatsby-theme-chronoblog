/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';

import Feed from './feed';
import Layout from './layout';
import SEO from './seo';

/** @typedef { import('react') } React */

/**
 * @typedef {object} Props
 * @property {object} data
 * @property {object} data.mdx
 * @property {string} data.mdx.id
 * @property {string} data.mdx.body
 * @property {object} data.mdx.frontmatter
 * @property {string} data.mdx.frontmatter.title
 * @property {string | Date} data.mdx.frontmatter.date
 * @property {string[]=} data.mdx.frontmatter.tags
 * @property {object} data.mdx.fields
 * @property {string} data.mdx.fields.slug
 */

/**
 * @param {Props} props
 */
const Page = ({
  data: {
    mdx: {
      id,
      body,
      frontmatter: { title, date, tags },
      fields: { slug }
    }
  }
}) => {
  return (
    <Layout>
      <SEO title={title} slug={slug} />
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
        {date}
      </Styled.p>
      <article>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <footer>{tags ? tags.length : ''}</footer>
      <Feed reject={{ id }} />
    </Layout>
  );
};

const PagePost = ({ data }) => {
  return <Page data={data} />;
};

const PageLink = ({ data }) => {
  return <Page data={data} />;
};

export { PagePost, PageLink };
