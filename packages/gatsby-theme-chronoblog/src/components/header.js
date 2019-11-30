/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { Link as LinkGatsby } from 'gatsby';
import Headroom from 'react-headroom';
import { Container, Header, jsx } from 'theme-ui';

// @ts-ignore
import SiteHeader from '../site-header.mdx';

// https://theme-ui.com/sx-prop#using-the-sx-prop-in-mdx
const Link = ({ to, ...props }) => (
  <LinkGatsby
    sx={{
      marginRight: ['8px', '12px'],
      color: 'text',
      textDecoration: 'none',
      ':hover': {
        opacity: 0.7
      }
    }}
    to={to}
    {...props}
  />
);
const A = ({ children, ...props }) => (
  <a
    sx={{
      marginRight: ['8px', '12px'],
      color: 'text',
      textDecoration: 'none',
      ':hover': {
        opacity: 0.7
      }
    }}
    {...props}
  >
    {children}
  </a>
);

const MenuMain = ({ children, ...props }) => (
  <Container sx={{ py: ['6px', '12px'] }}>
    <div
      {...props}
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: ['space-between'],
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: [1, 2]
      }}
    >
      {children}
    </div>
  </Container>
);

const MenuBlock = ({ children, ...props }) => (
  <div
    {...props}
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
);

export default ({ ...props }) => {
  return (
    <Headroom
      {...props}
      sx={{
        '.headroom--unpinned': {
          transform: [null, 'translateY(0%)!important']
        }
      }}
    >
      <Header>
        <MDXProvider components={{ MenuMain, MenuBlock, Link, A }}>
          <div
            sx={{
              width: '100%',
              marginX: 'auto',
              marginBottom: ['2px', '2px'],
              marginTop: ['0px', '0px'],
              boxShadow: [
                '0 4px 6px -4px #00000038',
                '0 0px 0px 0px #00000000'
              ],
              backgroundColor: 'background'
            }}
          >
            <SiteHeader />
          </div>
        </MDXProvider>
      </Header>
    </Headroom>
  );
};
