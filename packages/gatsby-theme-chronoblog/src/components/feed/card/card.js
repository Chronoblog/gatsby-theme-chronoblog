/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

export default ({ post }) => {
  return (
    <Link
      to={post.slug}
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
        {post.title}
      </Styled.h2>
      <Styled.p
        sx={{
          mb: 4,
          fontSize: [0, 0],
          fontWeight: 'bold'
        }}
      >
        {post.date}
      </Styled.p>
      <Styled.p>{post.excerpt}</Styled.p>
    </Link>
  );
};
