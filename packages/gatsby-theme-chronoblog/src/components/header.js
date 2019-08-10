/** @jsx jsx */
import { Container, Flex, Header, jsx } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';
// @ts-ignore
import SiteHeader from '../site-header.mdx';

export default () => {
  const siteMetadata = useSiteMetadata();
  return (
    <Header>
      <Container>
        <Flex
          sx={{
            flexWrap: 'wrap'
          }}
        >
          <SiteHeader siteMetadata={siteMetadata} />
        </Flex>
      </Container>
    </Header>
  );
};
