/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { Link as LinkGatsby } from 'gatsby';
import { Container, Header, jsx } from 'theme-ui';

// @ts-ignore
import SiteHeader from '../site-header.mdx';

const Link = ({ to, ...props }) => (
  <LinkGatsby sx={{ variant: 'link.noStyle' }} to={to} {...props} />
);
const A = ({ children, ...props }) => (
  <a sx={{ variant: 'link.noStyle' }} {...props}>
    {children}
  </a>
);

const MenuMain = ({ children, ...props }) => (
  <div
    {...props}
    sx={{
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '18px'
    }}
  >
    {children}
  </div>
);

const MenuBlock = ({ children, ...props }) => (
  <div
    {...props}
    sx={{
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: [`1rem`, '2rem'],
      alignItems: 'center'
    }}
  >
    {children}
  </div>
);

export default () => {
  return (
    <Header>
      <MDXProvider components={{ MenuMain, MenuBlock, Link, A }}>
        <Container>
          <SiteHeader />
        </Container>
      </MDXProvider>
    </Header>
  );
};
