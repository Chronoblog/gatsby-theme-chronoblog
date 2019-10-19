/** @jsx jsx */
import Prism from '@theme-ui/prism';
import { jsx } from 'theme-ui';

const heading = (Tag) => ({ children, ...props }) => {
  return <Tag {...props}>{children}</Tag>;
};

export default {
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  pre: (props) => props.children,
  code: Prism
};
