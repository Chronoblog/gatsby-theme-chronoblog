/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

import CoverImage from '../../cover-image';
import Date from '../../date';
import Tags from '../../tags';

const getDescriptionForCard = (fromFrontmatter, fromExcerpt) => {
  if (fromFrontmatter) return fromFrontmatter;
  if (fromFrontmatter === '') return '';
  if (fromExcerpt && fromExcerpt !== '') return fromExcerpt;
  return '';
};

const LinkCard = ({ to, children }) => (
  <Link
    to={to}
    sx={{
      display: 'block',
      textDecoration: 'none',
      color: 'inherit'
    }}
  >
    {children}
  </Link>
);
export default ({ item }) => {
  //
  const description = getDescriptionForCard(
    item.frontmatter.description,
    item.excerpt
  );
  const link = item.fields.slug;
  const { date } = item.frontmatter;
  const { title } = item.frontmatter;
  const { tags } = item.frontmatter;
  //
  return (
    <article>
      <div
        sx={{
          my: '20px',
          color: 'text',
          bg: 'inherit',
          border: '2px',
          borderColor: 'muted',
          borderStyle: 'solid',
          borderRadius: [0],
          '&:hover': {
            opacity: 0.9,
            borderColor: 'secondary'
          }
        }}
      >
        <LinkCard to={link}>
          <CoverImage data={item} />
        </LinkCard>
        <LinkCard to={link}>
          <div sx={{ px: '20px', pt: '20px' }}>
            <Styled.h2 sx={{ mb: '8px', mt: '12px' }}>{title}</Styled.h2>
            <Date date={date} />
            <Styled.p sx={{ mb: '18px' }}>{description}</Styled.p>
          </div>
        </LinkCard>
        {tags && tags !== null ? (
          <div sx={{ mt: '4px', px: '20px', pb: '20px' }}>
            <Tags tags={tags} />
          </div>
        ) : (
          ''
        )}
      </div>
    </article>
  );
};
