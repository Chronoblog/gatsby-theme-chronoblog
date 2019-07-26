import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const query = graphql`
  query HeadQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

interface SiteMetadata {
  title: string;
  description: string;
  author: string;
}

interface Props {
  title: string;
  description: string;
}

const useMetadata = (): SiteMetadata => {
  const data = useStaticQuery(query);
  return data.site.siteMetadata;
};

export default (props: Props): JSX.Element => {
  const meta = useMetadata();
  const title = props.title || meta.title;
  const description = props.description || meta.description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={meta.author} />
    </Helmet>
  );
};
