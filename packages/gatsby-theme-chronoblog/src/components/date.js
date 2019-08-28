/** @jsx jsx */
import { jsx } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';

/**
 * @param {Date | string | undefined} date
 * @param {string} language
 * @param {object} options
 * @returns {string | undefined}
 */
const makeDate = (date, language = 'en', options) => {
  if (!date) return undefined;
  const newDate = new Date(date);
  const dateString = newDate.toLocaleString(language, options);
  return dateString;
};

export default ({
  date,
  options = { year: 'numeric', month: 'long', day: 'numeric' }
}) => {
  const { language } = useSiteMetadata();
  const dateString = makeDate(date, language, options);
  //
  return (
    <div>
      {dateString ? (
        <div
          sx={{
            fontSize: [1],
            opacity: 0.8,
            fontStyle: 'italic'
          }}
        >
          {dateString}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
