/** @jsx jsx */
import { jsx, Main, Styled } from 'theme-ui';

import Footer from './footer';
import Head from './head';
import Header from './header';
import Root from './root';

interface Props {
  children: React.ReactNode;
  title: string;
  excerpt: string;
  date: string | Date;
}

export default (props: Props): JSX.Element => {
  return (
    <Root>
      <Head title={props.title} description={props.excerpt} />
      <Header />
      <Main>
        <div
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            px: 3
          }}
        >
          <Styled.h1>{props.title}</Styled.h1>
          <Styled.p
            sx={{
              fontSize: [0, 0],
              fontWeight: 'bold'
            }}
          >
            {props.date}
          </Styled.p>
          {props.children}
        </div>
      </Main>
      <Footer />
    </Root>
  );
};
