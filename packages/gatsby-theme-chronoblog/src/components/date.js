/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

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
        <Styled.p
          sx={{
            fontSize: [1]
          }}
        >
          {dateString}
        </Styled.p>
      ) : (
        ''
      )}
    </div>
  );
};
