/** @jsx jsx */
import { jsx } from 'theme-ui';

export default (props) => (
  <button
    type="button"
    {...props}
    sx={{
      appearance: 'none',
      fontFamily: 'inherit',
      fontWeight: 'bold',
      fontSize: 32,
      textTransform: 'uppercase',
      p: 0,
      color: 'inherit',
      bg: '#ffffff00',
      border: 0,
      '&:focus': {
        outline: '0px solid'
      }
    }}
  />
);
