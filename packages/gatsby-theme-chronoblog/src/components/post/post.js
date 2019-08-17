/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';

// @ts-ignore
import PostBottom from '../../post-bottom.mdx';
// @ts-ignore
import PostFooter from '../../post-footer.mdx';
import Layout from '../layout';
import SEO from '../seo';

const PageHeader = ({
  data: {
    mdx: {
      id,
      frontmatter: { title, date },
      fields: { slug }
    }
  }
}) => {
  return (
    <header>
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
        {slug}
      </Styled.p>
      <Styled.p
        sx={{
          fontSize: [0, 0]
        }}
      >
        {date}
      </Styled.p>
    </header>
  );
};

const PageMain = ({
  data: {
    mdx: { body }
  }
}) => {
  return <MDXRenderer>{body}</MDXRenderer>;
};

const PageFooter = () => {
  return (
    <footer>
      <PostFooter />
    </footer>
  );
};

const Post = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} slug={data.mdx.fields.slug} />
      <main>
        <article>
          <PageHeader data={data} />
          <PageMain data={data} />
          <PageFooter />
        </article>
      </main>
      <aside>
        <PostBottom />
      </aside>
    </Layout>
  );
};

export default Post;
