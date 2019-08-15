/** @jsx jsx */
import { useContext } from 'react';
import { Box, Flex, jsx } from 'theme-ui';

import FeedContext from '../../contexts/context-feed';

export default ({ placeholder = 'search' }) => {
  const {
    value: { searchInput },
    onChangeSearchInput
  } = useContext(FeedContext);
  return (
    <div sx={{ marginY: [30] }}>
      <Flex
        sx={{
          flexWrap: 'nowrap',
          color: 'inherit',
          bg: 'muted',
          borderRadius: [0]
        }}
      >
        <Box sx={{ maxWidth: [50], py: '1' }}>
          <span
            sx={{
              fontSize: [26],
              px: [1, 2],
              pl: [3],
              opacity: ['0.7'],
              userSelect: 'none'
            }}
            role="img"
            aria-label="search"
          >
            🔎
          </span>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <input
            type="search"
            sx={{
              width: ['100%'],
              color: 'inherit',
              bg: 'inherit',
              py: [2],
              px: [2, 1],
              fontSize: [26],
              border: `0px solid`,
              outline: '0px solid',
              opacity: '0.9'
            }}
            placeholder={placeholder}
            value={searchInput}
            onChange={onChangeSearchInput}
          />
        </Box>
      </Flex>
    </div>
  );
};
