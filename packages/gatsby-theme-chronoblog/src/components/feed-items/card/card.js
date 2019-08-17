/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

import useSiteMetadata from '../../../hooks/use-site-metadata';

/**
 * @param {Date | string | undefined} date
 * @param {string} language
 * @param {object} options
 * @returns {string | undefined}
 */
const makeDate = (
  date,
  language = 'en',
  options = { year: 'numeric', month: 'long', day: 'numeric' }
) => {
  if (!date) return undefined;
  const newDate = new Date(date);
  const dateString = newDate.toLocaleString(language, options);
  return dateString;
};

export default ({ item }) => {
  const { language } = useSiteMetadata();
  const date = makeDate(item.frontmatter.date, language);
  //
  return (
    <article>
      <Link
        to={item.fields.slug}
        sx={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        <Styled.h2>{item.frontmatter.title}</Styled.h2>
        {date ? (
          <Styled.p
            sx={{
              mb: 4,
              fontSize: [0, 0]
            }}
          >
            {date}
          </Styled.p>
        ) : (
          ''
        )}
        <Styled.p>
          {item.frontmatter.tags
            ? item.frontmatter.tags.map((t) => `${t} `)
            : ''}
        </Styled.p>
      </Link>
    </article>
  );
};
