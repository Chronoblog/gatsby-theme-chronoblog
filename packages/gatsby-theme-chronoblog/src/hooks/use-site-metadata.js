import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';

/**
 * @typedef {object} SiteMetadata
 * @property {string=} title
 * @property {string=} description
 * @property {string=} image
 * @property {string=} siteUrl
 * @property {string=} language
 * @property {string=} author
 * @property {string=} twitter
 * @property {object=} uiText
 * @property {string=} uiText.feedShowMoreButton
 * @property {string=} uiText.feedSearchPlaceholder
 * @property {number=} feedItemsLimit
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

  // default value
  siteMetadata.language = siteMetadata.language || 'en';

  siteMetadata.uiText = siteMetadata.uiText || {};

  siteMetadata.uiText.feedShowMoreButton = _.get(
    siteMetadata,
    'uiText.feedShowMoreButton',
    'Show More'
  );
  siteMetadata.uiText.feedSearchPlaceholder = _.get(
    siteMetadata,
    'uiText.feedSearchPlaceholder',
    'search'
  );

  siteMetadata.feedItemsLimit = siteMetadata.feedItemsLimit || 50;

  return siteMetadata;
};

export default useSiteMetadata;
