/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

import Date from '../../date';
import Tags from '../../tags';

const getDescriptionForCard = (fromFrontmatter, fromExcerpt) => {
  if (fromFrontmatter) return fromFrontmatter;
  if (fromFrontmatter === '') return '';
  if (fromExcerpt && fromExcerpt !== '') return fromExcerpt;
  return '';
};

export default ({ item }) => {
  //
  const description = getDescriptionForCard(
    item.frontmatter.description,
    item.excerpt
  );
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
        <Date date={item.frontmatter.date} />
        <Styled.p>{description}</Styled.p>
        <Tags tags={item.frontmatter.tags} />
      </Link>
    </article>
  );
};
