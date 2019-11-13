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
    <div sx={{ mt: '50px', mb: '50px' }}>
      {PostFooterMdx && PostFooterMdx !== '' ? (
        <PostFooterMdx siteMetadata={siteMetadata} />
      ) : (
        ''
      )}
    </div>
  );
};

/**
 * @param {'fixed' | 'fluid'} imgType
 * @param {*} frontmatter
 */
const getImage = (frontmatter, imgType) => {
  if (
    frontmatter &&
    frontmatter.cover &&
    frontmatter.cover.childImageSharp &&
    frontmatter.cover.childImageSharp[imgType] &&
    frontmatter.cover.childImageSharp[imgType] !== '' &&
    frontmatter.cover.childImageSharp[imgType] !== 0
  )
    return frontmatter.cover.childImageSharp[imgType].src;
  return '';
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
        image={getImage(data.mdx.frontmatter, 'fluid')}
      />
      <main>
        <article>
          <header>
            <CoverImage data={data.mdx} type="post" height={384} />
            <PostTitle data={data} />
            <Date date={data.mdx.frontmatter.date} />
            <div sx={{ mt: 20, mb: 3 }}>
              <Tags type="item" tags={data.mdx.frontmatter.tags} />
            </div>
          </header>
          <PostContent data={data} />
          <footer>
            <Tags type="item" tags={data.mdx.frontmatter.tags} />
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
