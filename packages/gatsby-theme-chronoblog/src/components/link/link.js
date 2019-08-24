/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';

// @ts-ignore
import ContentBottomMdx from '../../content-bottom.mdx';
// @ts-ignore
import LinkFooterMdx from '../../link-footer.mdx';
import CoverImage from '../cover-image';
import Date from '../date';
import Layout from '../layout';
import SEO from '../seo';
import Tags from '../tags';

const LinkTitle = ({
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

const LinkContent = ({
  data: {
    mdx: { body }
  }
}) => {
  return <MDXRenderer>{body}</MDXRenderer>;
};

const LinkFooter = () => {
  return (
    <div sx={{ mt: '40px', mb: '60px' }}>
      {LinkFooterMdx && LinkFooterMdx !== '' ? <LinkFooterMdx /> : ''}
    </div>
  );
};

export const Link = ({ data }) => {
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
        <article>
          <header>
            <CoverImage data={data.mdx} borderRadius="4px" />
            <LinkTitle data={data} />
            <Date date={data.mdx.frontmatter.date} />
            <Tags tags={data.mdx.frontmatter.tags} />
          </header>
          <LinkContent data={data} />
          <footer>
            <Tags tags={data.mdx.frontmatter.tags} />
            <LinkFooter />
          </footer>
        </article>
      </main>
      <aside>
        <ContentBottomMdx />
      </aside>
    </Layout>
  );
};

export default Link;
