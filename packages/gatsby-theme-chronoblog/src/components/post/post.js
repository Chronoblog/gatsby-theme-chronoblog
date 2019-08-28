/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';

// @ts-ignore
import ContentBottomMdx from '../../content-bottom.mdx';
import useSiteMetadata from '../../hooks/use-site-metadata';
// @ts-ignore
import PostFooterMdx from '../../post-footer.mdx';
import CoverImage from '../cover-image';
import Date from '../date';
import Layout from '../layout';
import SEO from '../seo';
import Tags from '../tags';

const PostTitle = ({
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

const PostContent = ({
  data: {
    mdx: { body }
  }
}) => {
  return <MDXRenderer>{body}</MDXRenderer>;
};

const getDescriptionForSeo = (fromFrontmatter, fromExcerpt) => {
  if (fromFrontmatter && fromFrontmatter !== '') return fromFrontmatter;
  if (fromExcerpt && fromExcerpt !== '') return fromExcerpt;
  return '';
};

const PostFooter = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <div sx={{ mt: '40px', mb: '60px' }}>
      {PostFooterMdx && PostFooterMdx !== '' ? (
        <PostFooterMdx siteMetadata={siteMetadata} />
      ) : (
        ''
      )}
    </div>
  );
};

export const Post = ({ data }) => {
  const description = getDescriptionForSeo(
    data.mdx.frontmatter.description,
    data.mdx.excerpt
  );
  //
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        slug={data.mdx.fields.slug}
        description={description}
      />
      <main>
        <article>
          <header>
            <CoverImage data={data.mdx} borderRadius="4px" />
            <PostTitle data={data} />
            <Date date={data.mdx.frontmatter.date} />
            <Tags tags={data.mdx.frontmatter.tags} />
          </header>
          <PostContent data={data} />
          <footer>
            <Tags tags={data.mdx.frontmatter.tags} />
            <PostFooter />
          </footer>
        </article>
      </main>
      <aside>
        <ContentBottomMdx />
      </aside>
    </Layout>
  );
};

export default Post;
