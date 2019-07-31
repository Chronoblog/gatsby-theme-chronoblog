/** @jsx jsx */
import { jsx, Layout } from 'theme-ui';

/**
 *
 * @param {any} props spread props
 */
const Root = (props) => (
  <Layout
    {...props}
    sx={{
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }}
  />
);

export default Root;
