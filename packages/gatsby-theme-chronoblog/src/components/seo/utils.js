// import normalizeUrl from 'normalize-url';
// import urlJoin from 'url-join';

/**
 *
 * @param {object} meta
 * @param {string=} meta.title
 * @param {object=} props
 * @returns {string}
 */
export const genTitle = (meta, props) => {
  const metaTitle = meta.title || '';
  if (props && props.title) {
    if (metaTitle === '') return `${props.title}`;
    return `${props.title} | ${metaTitle}`;
  }
  return metaTitle;
};

/**
 *
 * @param {object} meta
 * @param {string=} meta.url
 * @param {string=} meta.pathPrefix
 * @param {object=} props
 * @returns {string}
 */
export const genUrl = (meta, props) => {
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
};
