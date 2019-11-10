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
 * @param {string} propsImage
 * @returns {string}
 */
const genImage = (siteMeta, propsImage = '') => {
  if (propsImage !== '') return propsImage;
  if (siteMeta && siteMeta.siteImage) return siteMeta.siteImage;
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
  children
}) => {
  const siteMeta = useSiteMetadata();

  const metaTitle = genTitle(siteMeta, title);
  const metaDescription = genDescription(siteMeta, description);
  const metaUrl = genUrl(siteMeta, slug);
  const siteLanguage = siteMeta.siteLanguage || 'en';
  const ogLanguage = siteMeta.ogLanguage || 'en_US';
  const metaImage = genImage(siteMeta, image);
  const twitter = siteMeta.twitter || '';
  // const author = siteMeta.author || twitter;
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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:image" content={metaImage} />
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
