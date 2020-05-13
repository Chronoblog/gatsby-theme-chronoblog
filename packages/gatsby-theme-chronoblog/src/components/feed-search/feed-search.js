/** @jsx jsx */
import { useContext } from 'react';
import { Box, Flex, jsx } from 'theme-ui';

import FeedContext from '../../contexts/context-feed';
import useSiteMetadata from '../../hooks/use-site-metadata';

const Symbol = ({ symbol }) => {
  if (!symbol) return <div />;
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: ['40px'],
        minWidth: ['40px']
      }}
    >
      <div
        sx={{
          fontSize: ['26px'],
          opacity: ['0.7'],
          userSelect: 'none'
        }}
      >
        <span role="img" aria-label="search">
          {symbol}
        </span>
      </div>
    </div>
  );
};

export default ({ placeholder = '', symbol = '' }) => {
  //
  const { uiText, feedSearch } = useSiteMetadata();
  //
  const searchPlaceholder =
    placeholder || uiText.feedSearchPlaceholder || 'search';
  const symbolToUse = symbol || feedSearch.symbol || '';
  //
  const { searchInput, onChangeSearchInput } = useContext(FeedContext);
  return (
    <div sx={{ marginY: [20] }}>
      <Flex
        sx={{
          flexWrap: 'nowrap',
          color: 'inherit',
          bg: 'muted',
          borderRadius: 'search',
          borderColor: 'muted',
          borderStyle: 'solid',
          borderWidth: `1px`
        }}
      >
        <Symbol symbol={symbolToUse} />
        <Box sx={{ flexGrow: 1 }}>
          <input
            type="search"
            aria-label="search"
            sx={{
              '-webkit-appearance': 'textfield',
              width: ['100%'],
              color: 'inherit',
              bg: 'background',
              py: [2],
              px: [2],
              fontSize: [4],
              fontFamily: 'inherit',
              borderColor: 'muted',
              borderStyle: 'solid',
              borderWidth: `search`,
              borderRadius: 'search',
              outline: '0px solid',
              opacity: '0.9'
            }}
            placeholder={searchPlaceholder}
            value={searchInput}
            onChange={onChangeSearchInput}
          />
        </Box>
      </Flex>
    </div>
  );
};
