/** @jsx jsx */
import { Container, Header, jsx } from 'theme-ui';

// @ts-ignore
import SiteHeader from '../site-header.mdx';

export default () => {
  return (
    <Header>
      <Container>
        <SiteHeader />
      </Container>
    </Header>
  );
};
