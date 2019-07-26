/** @jsx jsx */
import { jsx } from 'theme-ui';

import { PropsSpread } from '../types';

export default (props: PropsSpread): JSX.Element => (
  <button
    type="button"
    {...props}
    sx={{
      appearance: 'none',
      fontFamily: 'inherit',
      fontWeight: 'bold',
      fontSize: 0,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      p: 12,
      color: 'inherit',
      bg: 'muted',
      border: 0,
      '&:focus': {
        outline: '2px solid'
      }
    }}
  />
);
