/** @jsx jsx */
import { jsx } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';

/**
 * @param {Date | string | undefined} date
 * @param {string} language
 * @param {object} options
 * @returns {string | undefined}
 */
const makeDate = (date, language, options) => {
  if (!date) return undefined;
  const newDate = new Date(date);
  const dateString = newDate.toLocaleString(language, options);
  return dateString;
};

export default ({
  date,
  options = { year: 'numeric', month: 'long', day: 'numeric' },
  fontSize = [1],
  ...props
}) => {
  const meta = useSiteMetadata();
  const dateString = makeDate(date, meta.siteLanguage, options);
  if (dateString)
    //
    return (
      <div
        sx={{
          color: 'text',
          fontSize,
          opacity: 0.8,
          // fontStyle: 'italic',
          fontWeight: 'normal'
        }}
        {...props}
      >
        {dateString}
      </div>
    );
  return <div />;
};
