import { graphql, useStaticQuery } from 'gatsby';

/**
 * @typedef {object} SiteMetadata
 * @property {string=} title
 * @property {string=} description
 * @property {string=} siteUrl
 * @property {string=} pathPrefix
 * @property {string=} language
 * @property {string=} author
 * @property {string=} twitter
 */

/**
 * @returns {SiteMetadata}
 */
const useSiteMetadata = () => {
  const seoQuery = graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          pathPrefix
          language
          author
          twitter
        }
      }
    }
  `;
  const data = useStaticQuery(seoQuery);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
