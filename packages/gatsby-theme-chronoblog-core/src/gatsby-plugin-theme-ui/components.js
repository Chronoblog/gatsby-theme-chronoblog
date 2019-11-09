/** @jsx jsx */
import Prism from '@theme-ui/prism';
import { jsx } from 'theme-ui';

export default {
  pre: (props) => props.children,
  code: Prism
};
