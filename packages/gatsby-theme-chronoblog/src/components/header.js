/** @jsx jsx */
import { Container, Flex, Header, jsx } from 'theme-ui';

// @ts-ignore
import SiteHeader from '../site-header.mdx';

export default () => {
  return (
    <Header>
      <Container sx={{ marginBottom: ['5px'] }}>
        <Flex
          sx={{
            flexWrap: 'wrap'
          }}
        >
          <SiteHeader />
        </Flex>
      </Container>
    </Header>
  );
};
