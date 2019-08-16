/** @jsx jsx */
import { jsx } from 'theme-ui';

/**
 *
 * @typedef {object=} Props
 * @property {object=} as
 * @property {string=} as.Element
 * @property {*=} children
 *
 */

/**
 * universal button component
 *
 * @param {Props=} props
 */
export default ({ as: Element = 'button', children, ...props }) => {
  return (
    <Element
      {...props}
      sx={{
        color: 'text',
        bg: 'muted',
        userSelect: 'none',
        display: 'inline-block',
        px: '20px',
        py: '10px',
        fontSize: [0],
        border: '1px',
        borderColor: 'muted',
        borderStyle: 'solid',
        borderRadius: [0],
        '&:hover': {
          opacity: 0.8,
          cursor: 'pointer'
        }
      }}
    >
      {children}
    </Element>
  );
};
