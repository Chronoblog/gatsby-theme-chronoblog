/** @jsx jsx */
import { jsx } from 'theme-ui';

// @ts-ignore
import PostBottom from '../../post-bottom.mdx';
// @ts-ignore
import PostFooter from '../../post-footer.mdx';
import Date from '../date';
import Layout from '../layout';
import SEO from '../seo';
import Tags from '../tags';
import { PostContent, PostCover, PostTitle } from './post-components';

const getDescriptionForSeo = (fromFrontmatter, fromExcerpt) => {
  if (fromFrontmatter && fromFrontmatter !== '') return fromFrontmatter;
  if (fromExcerpt && fromExcerpt !== '') return fromExcerpt;
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
      />
      <main>
        <article>
          <header>
            <PostCover data={data} />
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
        <PostBottom />
      </aside>
    </Layout>
  );
};

export default Post;
