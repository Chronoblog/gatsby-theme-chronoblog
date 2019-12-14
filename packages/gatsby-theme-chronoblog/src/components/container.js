/** @jsx jsx */
import { Container, jsx } from 'theme-ui';

export default ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
