import { graphql, useStaticQuery } from 'gatsby';
import normalizeUrl from 'normalize-url';
import React from 'react';
import { Helmet } from 'react-helmet';
import urlJoin from 'url-join';

const query = graphql`
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
const useMetadata = () => {
  const data = useStaticQuery(query);
  return data.site.siteMetadata;
};

/**
 *
 * @param {object} meta
 * @param {object=} props
 * @returns {string}
 */
function genTitle(meta, props) {
  const metaTitle = meta.title || '';
  if (props && props.title) {
    return `${props.title} | ${metaTitle}`;
  }
  return metaTitle;
}

/**
 *
 * @param {object} meta
 * @param {object=} props
 * @returns {string}
 */
function genUrl(meta, props) {
  const metaUrl = meta.url || '';
  // TODO delete '/' from end url if exist
  // pathPrefix - /gatsby-theme-chronoblog
  const pathPrefix = meta.pathPrefix || '/';
  // TODO create '/' at the begining if don't exist
  // TODO delete '/' from end url if exist
  if (props && props.pathName) {
    const { pathName } = props;
    const finalUrl = `${metaUrl}${pathPrefix}/${pathName}`;
    return finalUrl;
  }
  return `${metaUrl}${pathPrefix}`;
}

/**
 * @typedef {object} Props
 * @property {string=} title
 * @property {string=} description
 * @property {string=} pathName
 * @property {*} children
 */

/**
 * @param {Props} props
 */
export default (props) => {
  const meta = useMetadata();

  const title = genTitle(meta, props);
  const description = props.description || meta.description || '';
  const url = genUrl(meta, props);
  const language = meta.description || '';
  const author = meta.author || '';
  const twitter = meta.twitter || author;

  return (
    <Helmet>
      {/* Main tags */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <meta name="image" content={image} /> */}

      {/* Schema.org */}

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
      {/* <meta property="og:image:alt" content={description} /> */}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:url" content={url} />

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
      {props.children}
    </Helmet>
  );
};
