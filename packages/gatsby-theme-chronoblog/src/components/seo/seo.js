import normalizeUrl from 'normalize-url';
import React from 'react';
import { Helmet } from 'react-helmet';
import urlJoin from 'url-join';

import useSiteMetadata from '../../hooks/use-site-metadata';

/**
 *
 * @param {object} siteMeta
 * @param {string=} siteMeta.title
 * @param {string} propsTitle
 * @returns {string}
 */
const genTitle = (siteMeta, propsTitle = '') => {
  const siteMetaTitle = siteMeta.title || '';
  if (propsTitle !== '') {
    if (siteMetaTitle === '') return propsTitle;
    return `${propsTitle} | ${siteMetaTitle}`;
  }
  return siteMetaTitle;
};

/**
 *
 * @param {object} siteMeta
 * @param {string=} siteMeta.siteUrl
 * @param {string=} siteMeta.pathPrefix
 * @param {string} propsPathName
 * @returns {string}
 */
const genUrl = (siteMeta, propsPathName = '') => {
  const metaUrl = siteMeta.siteUrl ? siteMeta.siteUrl : '';
  // pathPrefix - like this /gatsby-theme-chronoblog
  const pathPrefix = siteMeta.pathPrefix || '/';
  const pathName = propsPathName.replace(/\s/g, '-');
  /** @constant
    @type {string}
   */
  let finalUrl = urlJoin(metaUrl, pathPrefix, pathName);
  finalUrl = normalizeUrl(finalUrl);
  finalUrl = finalUrl.toLowerCase();
  return finalUrl;
};

/**
 *
 * @param {object} siteMeta
 * @param {string=} siteMeta.description
 * @param {string} propsDescription
 * @returns {string}
 */
const genDescription = (siteMeta, propsDescription = '') => {
  if (propsDescription !== '') return propsDescription;
  if (siteMeta && siteMeta.description) return siteMeta.description;
  return '';
};

// export for tests
export { genTitle, genUrl };

/**
 * @typedef {object} Props
 * @property {string=} title
 * @property {string=} description
 * @property {string=} pathName
 * @property {React.ReactNode=} children
 */

/**
 * @param {Props=} props
 */
const SEO = ({ title = '', description = '', pathName = '', children }) => {
  const siteMeta = useSiteMetadata();

  const metaTitle = genTitle(siteMeta, title);
  const metaDescription = genDescription(siteMeta, description);
  const metaUrl = genUrl(siteMeta, pathName);
  const language = siteMeta.language || '';
  // const metaImage
  const twitter = siteMeta.twitter || '';
  // const author = siteMeta.author || twitter;

  return (
    <Helmet>
      {/* Main tags */}
      <html lang={language} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {/* <meta name="image" content={metaImage} /> */}

      {/* Schema.org */}

      {/* OpenGraph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:description" content={metaDescription} />
      {/* <meta property="og:image" content={metaImage} /> */}
      {/* <meta property="og:image:alt" content={metaDescription} /> */}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:url" content={metaUrl} />
      {/* <meta name="twitter:image" content={metaImage} /> */}
      <meta name="twitter:image:alt" content={metaTitle} />

      {/* icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* children */}
      {children}
    </Helmet>
  );
};

export default SEO;
