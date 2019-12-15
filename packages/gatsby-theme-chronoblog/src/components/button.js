/** @jsx jsx */
import { Button } from '@theme-ui/components';
import { jsx } from 'theme-ui';

/**
 *
 * @typedef {object=} Props
 * @property {string=} variant
 * @property {*=} children
 *
 */

/**
 * universal button component
 *
 * @param {Props=} props
 */
export default ({ variant = 'primary', children, ...props }) => {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  );
};
