/** @jsx jsx */
import { Link } from 'gatsby';
import normalizeUrl from 'normalize-url';
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

const noStyleLink = {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit'
};

const LinkCard = ({ item, children }) => {
  if (item.fields.link && item.parent.sourceInstanceName === 'links')
    return (
      <a href={item.fields.link} sx={noStyleLink}>
        {children}
      </a>
    );
  //
  return (
    <Link to={item.fields.slug} sx={noStyleLink}>
      {children}
    </Link>
  );
};

const LinkText = ({ item }) => {
  if (item.fields.link && item.parent.sourceInstanceName === 'links') {
    const link = normalizeUrl(item.fields.link);
    return (
      <Styled.p
        sx={{
          mt: 0,
          mb: 0,
          fontWeight: 'bold'
        }}
      >
        {link}
      </Styled.p>
    );
  }
  return <div />;
};

const CardTitle = ({ item }) => {
  return (
    <Styled.h2 sx={{ mb: '6px', mt: '12px' }}>
      {item.frontmatter.title}
    </Styled.h2>
  );
};

export default ({ item }) => {
  //
  const description = getDescriptionForCard(
    item.frontmatter.description,
    item.excerpt
  );
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
        <LinkCard item={item}>
          <CoverImage data={item} />
        </LinkCard>
        <LinkCard item={item}>
          <div sx={{ px: '20px', pt: '20px' }}>
            <CardTitle item={item} />
            <LinkText item={item} />
            <Date date={date} />
            <Styled.p sx={{ mb: '18px' }}>{description}</Styled.p>
          </div>
        </LinkCard>
        {tags && tags !== null ? (
          <div sx={{ mt: '10px', px: '20px', pb: '20px' }}>
            <Tags tags={tags} />
          </div>
        ) : (
          ''
        )}
      </div>
    </article>
  );
};
