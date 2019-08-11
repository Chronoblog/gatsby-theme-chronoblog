/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

export default ({ children }) => (
  <Link
    sx={{
      color: 'text',
      textDecoration: 'none'
    }}
    to="/"
  >
    <span
      sx={{
        fontSize: [1, 2],
        fontWeight: 'bold'
      }}
    >
      {children}
    </span>
  </Link>
);
