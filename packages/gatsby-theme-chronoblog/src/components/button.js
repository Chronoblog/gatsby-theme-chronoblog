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
        px: '16px',
        py: '10px',
        fontSize: [1],
        fontFamily: 'inherit',
        border: '0px',
        borderRadius: 'button',
        ':hover': {
          opacity: 0.8,
          cursor: 'pointer',
          boxShadow: (theme) => `inset 0 0 0 2px ${theme.colors.secondary}`
        },
        '&:focus': {
          outline: '0px'
        }
      }}
    >
      {children}
    </Element>
  );
};
