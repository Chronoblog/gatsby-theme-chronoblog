/** @jsx jsx */
import { Container, jsx, Main } from 'theme-ui';

/**
 * component for main site content
 *
 * @param {*} props
 */
export default ({ children, ...props }) => {
  return (
    <Main {...props}>
      <Container>{children}</Container>
    </Main>
  );
};
