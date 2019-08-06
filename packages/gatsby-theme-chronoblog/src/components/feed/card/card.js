/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

export default ({ item }) => {
  return (
    <Link
      // to={item.frontmatter.slug}
      to="some"
      sx={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <Styled.h2
        sx={{
          fontSize: [5, 6]
        }}
      >
        {item.frontmatter.title}
      </Styled.h2>
      <Styled.p
        sx={{
          mb: 4,
          fontSize: [0, 0],
          fontWeight: 'bold'
        }}
      >
        {item.frontmatter.date}
      </Styled.p>
      {/* <Styled.p>{item.excerpt}</Styled.p> */}
    </Link>
  );
};
