/** @jsx jsx */
import { jsx, Layout } from 'theme-ui';

import { PropsSpread } from '../types';

export const Root: (props: PropsSpread) => JSX.Element = (
  props: PropsSpread
): JSX.Element => (
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
