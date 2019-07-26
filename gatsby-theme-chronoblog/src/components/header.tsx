/** @jsx jsx */
import { Link } from 'gatsby';
import React from 'react';
import { jsx, Styled, useColorMode } from 'theme-ui';

import Button from './button';

const modes = ['light', 'dark'];

export default (): JSX.Element => {
  const [mode, setMode] = useColorMode();

  const cycle = (): void => {
    const i = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[i]);
  };

  return (
    <header sx={{ variant: 'layout.header' }}>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: 'container',
          mx: 'auto',
          px: 3,
          py: 2
        }}
      >
        <Styled.h3
          sx={{
            fontSize: 2,
            m: 0
          }}
        >
          <Styled.a
            as={Link}
            to="/"
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 'bold',
              '&:hover': {
                color: 'primary'
              }
            }}
          >
            MDX Blog Theme
          </Styled.a>
        </Styled.h3>
        <div sx={{ mx: 'auto' }} />
        <Button onClick={cycle}>{mode}</Button>
      </div>
    </header>
  );
};
