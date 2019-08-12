/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';

// @ts-ignore
import LinkFooter from '../../link-footer.mdx';
// @ts-ignore
import PostFooter from '../../post-footer.mdx';
import Layout from '../layout';
import SEO from '../seo';

const ContentPageHeader = ({
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

const ContentPageMain = ({
  data: {
    mdx: { body }
  }
}) => {
  return <MDXRenderer>{body}</MDXRenderer>;
};

const ContentPageFooter = ({ children }) => {
  return <footer>{children}</footer>;
};

const ContentPage = ({ data, children }) => {
  return (
    <Layout>
      <main>
        <SEO title={data.mdx.frontmatter.title} slug={data.mdx.fields.slug} />
        <article>{children}</article>
      </main>
      <aside>aside for feed</aside>
    </Layout>
  );
};

export const PagePost = ({ data }) => {
  return (
    <ContentPage data={data}>
      <ContentPageHeader data={data} />
      <ContentPageMain data={data} />
      <ContentPageFooter>
        <PostFooter />
      </ContentPageFooter>
    </ContentPage>
  );
};

export const PageLink = ({ data }) => {
  return (
    <ContentPage data={data}>
      <ContentPageHeader data={data} />
      <ContentPageMain data={data} />
      <ContentPageFooter>
        <LinkFooter />
      </ContentPageFooter>
    </ContentPage>
  );
};
