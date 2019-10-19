/** @jsx jsx */
import { jsx } from 'theme-ui';

export default (props) => {
  return (
    <pre
      sx={{
        fontSize: [1],
        color: `text`,
        backgroundColor: `muted`,
        padding: `14px`
      }}
      {...props}
    />
  );
};
