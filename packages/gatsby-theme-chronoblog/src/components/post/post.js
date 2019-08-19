/** @jsx jsx */
import { jsx } from 'theme-ui';

// @ts-ignore
import PostBottom from '../../post-bottom.mdx';
// @ts-ignore
import PostFooter from '../../post-footer.mdx';
import Date from '../date';
import Layout from '../layout';
import SEO from '../seo';
import { PostContent, PostImage, PostTitle } from './post-components';

const getDescription = (fromFrontmatter, fromExcerpt) => {
  if (fromFrontmatter) return fromFrontmatter;
  if (fromFrontmatter === '') return '';
  if (fromExcerpt && fromExcerpt !== '') {
    return fromExcerpt;
  }
  return '';
};

export const Post = ({ data }) => {
  const description = getDescription(
    data.mdx.frontmatter.description,
    data.mdx.excerpt
  );
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
            <PostImage data={data} />
            <PostTitle data={data} />
            <Date date={data.mdx.frontmatter.date} />
          </header>
          <PostContent data={data} />
          <footer>
            <PostFooter />
          </footer>
        </article>
      </main>
      <aside>
        <PostBottom />
      </aside>
    </Layout>
  );
};

export default Post;
