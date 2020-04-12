/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import get from 'lodash/get';
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

const PostFooter = ({ postData }) => {
  const siteMetadata = useSiteMetadata();
  return (
    <div sx={{ mt: '30px', mb: '30px' }}>
      {PostFooterMdx && PostFooterMdx !== '' ? (
        <PostFooterMdx siteMetadata={siteMetadata} postData={postData} />
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
  const imagePath = get(
    data,
    'mdx.frontmatter.cover.childImageSharp.fluid.src',
    ''
  );
  //
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        slug={data.mdx.fields.slug}
        description={description}
        image={imagePath}
      />
      <main>
        <article>
          <header>
            <CoverImage data={data.mdx} type="post" />
            <PostTitle data={data} />
            <Date date={data.mdx.frontmatter.date} />
            <div sx={{ mt: 20, mb: 3 }}>
              <Tags type="item" tags={data.mdx.frontmatter.tags} />
            </div>
          </header>
          <PostContent data={data} />
          <footer sx={{ marginTop: '20px' }}>
            <Tags type="item" tags={data.mdx.frontmatter.tags} />
            <PostFooter postData={data.mdx} />
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
