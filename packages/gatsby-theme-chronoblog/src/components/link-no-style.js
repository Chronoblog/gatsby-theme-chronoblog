/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

/**
 * @typedef {object} Props
 * @property {string} to
 * @property {React.ReactNode} children
 */

/**
 * @param {Props=} props
 */
export default ({ to, children }) => (
  <Link
    sx={{
      color: 'text',
      textDecoration: 'none'
    }}
    to={to}
  >
    {children}
  </Link>
);
