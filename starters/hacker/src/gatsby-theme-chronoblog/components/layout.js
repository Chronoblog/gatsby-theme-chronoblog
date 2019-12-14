// import Container from 'gatsby-theme-chronoblog/src/components/container';
import Footer from 'gatsby-theme-chronoblog/src/components/footer';
import Header from 'gatsby-theme-chronoblog/src/components/header';
import Root from 'gatsby-theme-chronoblog/src/components/root';
import React from 'react';

export default ({ children }) => {
  return (
    <Root>
      <Header />
      {children}
      <Footer />
    </Root>
  );
};
