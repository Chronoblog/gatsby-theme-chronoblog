import { graphql, useStaticQuery } from 'gatsby';

/**
 * @typedef {object} SiteMetadata
 * @property {string} siteTitle
 * @property {string} siteDescription
 * @property {string} siteImage
 * @property {string} siteUrl
 * @property {string} pathPrefix
 * @property {string} siteLanguage
 * @property {string} ogLanguage
 * @property {string} author
 * @property {string} twitter
 * @property {object} uiText
 * @property {string} uiText.feedShowMoreButton
 * @property {string} uiText.feedSearchPlaceholder
 * @property {string} uiText.cardReadMoreButton
 * @property {string} uiText.allTagsButton
 * @property {number} feedItemsLimit
 * @property {boolean} yearSeparator
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
          siteTitle
          siteDescription
          siteImage
          siteUrl
          pathPrefix
          siteLanguage
          ogLanguage
          author
          twitter
          uiText {
            feedShowMoreButton
            feedSearchPlaceholder
            cardReadMoreButton
            allTagsButton
          }
          feedItemsLimit
          yearSeparator
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
