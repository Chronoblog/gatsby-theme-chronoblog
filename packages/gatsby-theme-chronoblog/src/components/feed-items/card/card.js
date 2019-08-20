/** @jsx jsx */
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { jsx, Styled } from 'theme-ui';

import Date from '../../date';
import Tags from '../../tags';

const useCover = (frontmatter) => {
  if (
    frontmatter &&
    frontmatter.cover &&
    frontmatter.cover.childImageSharp &&
    frontmatter.cover.childImageSharp.fluid
  )
    return frontmatter.cover.childImageSharp.fluid;
  return '';
};

const CardPostCover = ({ data: { frontmatter } }) => {
  const coverImage = useCover(frontmatter);
  return <div>{coverImage ? <Img fluid={coverImage} /> : ''}</div>;
};

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
  //
  return (
    <article>
      <div
        sx={{
          px: '20px',
          py: '20px',
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
          <Styled.h2 sx={{ mb: '8px', mt: '2px' }}>
            {item.frontmatter.title}
          </Styled.h2>
          <Date date={item.frontmatter.date} />
          <Styled.p sx={{ mb: '18px' }}>{description}</Styled.p>
          <CardPostCover data={item} />
        </LinkCard>
        <Tags tags={item.frontmatter.tags} />
      </div>
    </article>
  );
};
