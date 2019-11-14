import normalizeUrl from 'normalize-url';
import React from 'react';
import { Helmet } from 'react-helmet';
import urlJoin from 'url-join';

import useSiteMetadata from '../../hooks/use-site-metadata';

/**
 *
 * @param {object} siteMeta
 * @param {string=} siteMeta.siteTitle
 * @param {string} propsTitle
 * @returns {string}
 */
const genTitle = (siteMeta, propsTitle = '') => {
  const siteMetaTitle = siteMeta.siteTitle || '';
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
 * @param {string} propsSlug
 * @returns {string}
 */
const genUrl = (siteMeta, propsSlug = '') => {
  const metaUrl = siteMeta.siteUrl ? siteMeta.siteUrl : '';
  const prefix = siteMeta.pathPrefix ? siteMeta.pathPrefix : '/';
  const slug = propsSlug.replace(/\s/g, '-');
  /** @constant
    @type {string}
   */
  let finalUrl = urlJoin(metaUrl, '/', prefix, '/', slug);
  finalUrl = normalizeUrl(finalUrl);
  finalUrl = finalUrl.toLowerCase();
  return finalUrl;
};

/**
 *
 * @param {object} siteMeta
 * @param {string=} siteMeta.siteDescription
 * @param {string} propsDescription
 * @returns {string}
 */
const genDescription = (siteMeta, propsDescription = '') => {
  if (propsDescription !== '') return propsDescription;
  if (siteMeta && siteMeta.siteDescription) return siteMeta.siteDescription;
  return '';
};

/**
 *
 * @param {object} siteMeta
 * @param {string=} siteMeta.siteImage
 * @param {string=} siteMeta.siteUrl
 * @param {string=} siteMeta.pathPrefix
 * @param {string} propsImage
 * @returns {string}
 */
const genImage = (siteMeta, propsImage = '') => {
  const metaUrl = siteMeta.siteUrl ? siteMeta.siteUrl : '';
  const prefix = siteMeta.pathPrefix ? siteMeta.pathPrefix : '/';
  //
  if (propsImage !== '') {
    let finalUrl = urlJoin(metaUrl, '/', prefix, '/', propsImage);
    finalUrl = normalizeUrl(finalUrl);
    finalUrl = finalUrl.toLowerCase();
    return finalUrl;
  }
  if (siteMeta && siteMeta.siteImage) {
    let finalUrl = urlJoin(metaUrl, '/', prefix, '/', siteMeta.siteImage);
    finalUrl = normalizeUrl(finalUrl);
    finalUrl = finalUrl.toLowerCase();
    return finalUrl;
  }
  return '';
};

// export for tests
export { genTitle, genUrl };

/**
 * @typedef {object} Props
 * @property {string=} title
 * @property {string=} description
 * @property {string=} slug
 * @property {string=} image
 * @property {string=} canonical
 * @property {'summary' | 'summary_large_image' | 'app' | 'player'=} twitterCardType
 * @property {React.ReactNode=} children
 */

/**
 * @param {Props=} props
 */
const SEO = ({
  title = '',
  description = '',
  slug = '',
  image = '',
  canonical = '',
  twitterCardType = 'summary_large_image',
  children
}) => {
  const siteMeta = useSiteMetadata();

  const metaTitle = genTitle(siteMeta, title);
  const metaDescription = genDescription(siteMeta, description);
  const metaUrl = genUrl(siteMeta, slug);
  const siteLanguage = siteMeta.siteLanguage || 'en';
  const ogLanguage = siteMeta.ogLanguage || 'en_US';
  const metaImage = genImage(siteMeta, image);
  //
  const twitterCreator = siteMeta.twitterCreator || '';
  const twitterSite = siteMeta.twitterSite || '';
  //
  const metaCanonical = genUrl(siteMeta, canonical);

  return (
    <Helmet>
      {/* Main tags */}
      <html lang={siteLanguage} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      {canonical ? <link rel="canonical" href={metaCanonical} /> : ''}

      {/* Schema.org */}

      {/* OpenGraph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={ogLanguage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={metaTitle} />

      {/* children */}
      {children}
    </Helmet>
  );
};

export default SEO;
