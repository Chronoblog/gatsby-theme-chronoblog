import { graphql, useStaticQuery } from 'gatsby';

/**
 * @typedef {object} SiteMetadata
 * @property {string=} title
 * @property {string=} description
 * @property {string=} image
 * @property {string=} siteUrl
 * @property {string=} language
 * @property {string=} author
 * @property {string=} twitter
 */

/**
 * @typedef {object} SiteData
 * @property {object} site
 * @property {SiteMetadata} site.siteMetadata
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
          image
          siteUrl
          language
          author
          twitter
        }
      }
    }
  `;
  /** @constant
    @type {SiteData}
   */
  const data = useStaticQuery(seoQuery);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
