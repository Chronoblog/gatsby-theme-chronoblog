/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';

// @ts-ignore
import ContentFooter from '../../content-footer.mdx';
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

const ContentPage = ({ data }) => {
  return (
    <Layout>
      <article>
        <SEO title={data.mdx.frontmatter.title} slug={data.mdx.fields.slug} />
        <ContentPageHeader data={data} />
        <ContentPageMain data={data} />
        <ContentPageFooter>
          <ContentFooter />
        </ContentPageFooter>
      </article>
    </Layout>
  );
};

export const PagePost = ({ data }) => {
  return <ContentPage data={data} />;
};

export const PageLink = ({ data }) => {
  return <ContentPage data={data} />;
};
