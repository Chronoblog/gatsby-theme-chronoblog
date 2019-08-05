/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

/**
 * @typedef {object} Props
 * @property {object} pageContext
 * @property {string} pageContext.previous
 * @property {string} pageContext.next
 */

/**
 * @param {Props} props
 */
export default ({ pageContext: { next, previous } }) => {
  return (
    <div
      sx={{
        display: 'flex'
      }}
      py={4}
    >
      {previous && (
        <Styled.a
          as={Link}
          to={previous}
          sx={{
            fontSize: 4,
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          Previous
        </Styled.a>
      )}
      <div sx={{ m: 'auto' }} />
      {next && (
        <Styled.a
          as={Link}
          to={next}
          sx={{
            fontSize: 4,
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          Next
        </Styled.a>
      )}
    </div>
  );
};
