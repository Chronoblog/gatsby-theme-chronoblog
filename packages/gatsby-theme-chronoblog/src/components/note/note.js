/** @jsx jsx */
import { jsx } from 'theme-ui';

// @ts-ignore
import ContentBottomMdx from '../../content-bottom.mdx';
// @ts-ignore
import FeedItems from '../feed-items';
import Layout from '../layout';
import SEO from '../seo';

export const Note = ({ data }) => {
  const description = data.mdx.excerpt || '';
  //
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        slug={data.mdx.fields.slug}
        description={description}
      />
      <main>
        <FeedItems
          limit={1}
          showMoreButton={false}
          skipThisPageItem={false}
          yearSeparator={false}
          // filter by slug - get only with this slug
          filter={(item) => item.fields.slug === data.mdx.fields.slug}
        />
      </main>
      <aside>
        <ContentBottomMdx />
      </aside>
    </Layout>
  );
};

export default Note;
