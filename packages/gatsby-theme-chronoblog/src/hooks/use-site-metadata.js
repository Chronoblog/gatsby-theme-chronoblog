import { graphql, useStaticQuery } from 'gatsby';

/**
 * @typedef {object} SiteMetadata
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {string} siteUrl
 * @property {string} language
 * @property {string} author
 * @property {string} twitter
 * @property {object} uiText
 * @property {string} uiText.feedShowMoreButton
 * @property {string} uiText.feedSearchPlaceholder
 * @property {string} uiText.allTagsButton
 * @property {number} feedItemsLimit
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
  const siteMetaQuery = graphql`
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
          uiText {
            feedShowMoreButton
            feedSearchPlaceholder
            allTagsButton
          }
          feedItemsLimit
        }
      }
    }
  `;
  /** @constant
    @type {SiteData}
   */
  const data = useStaticQuery(siteMetaQuery);
  const { siteMetadata } = data.site;
  //
  return siteMetadata;
};

export default useSiteMetadata;
