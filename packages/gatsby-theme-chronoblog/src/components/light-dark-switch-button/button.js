/** @jsx jsx */
import { jsx } from 'theme-ui';

export default (props) => (
  <button
    type="button"
    {...props}
    sx={{
      appearance: 'none',
      fontSize: 32,
      color: 'inherit',
      bg: '#ffffff00',
      border: 0,
      '&:focus': {
        outline: '0px solid'
      }
    }}
  />
);
