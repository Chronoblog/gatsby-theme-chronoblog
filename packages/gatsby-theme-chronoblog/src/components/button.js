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
export default ({
  as: Element = 'button',
  active = false,
  children,
  ...props
}) => {
  return (
    <Element
      {...props}
      sx={{
        color: 'text',
        bg: active ? 'secondary' : 'muted',
        userSelect: 'none',
        display: 'inline-block',
        px: '20px',
        py: '10px',
        fontSize: [1],
        border: '0px',
        borderRadius: [0],
        ':hover': {
          opacity: 0.8,
          cursor: 'pointer',
          bg: 'secondary'
        }
      }}
    >
      {children}
    </Element>
  );
};
