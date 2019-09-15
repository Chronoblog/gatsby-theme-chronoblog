/** @jsx jsx */
import { useContext } from 'react';
import { Box, Flex, jsx } from 'theme-ui';

import FeedContext from '../../contexts/context-feed';
import useSiteMetadata from '../../hooks/use-site-metadata';

export default ({ placeholder = '' }) => {
  //
  const {
    uiText: { feedSearchPlaceholder }
  } = useSiteMetadata();
  const searchPlaceholder = placeholder || feedSearchPlaceholder || 'search';
  //
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
          borderRadius: [0],
          borderColor: 'muted',
          borderStyle: 'solid',
          borderWidth: `1px`
        }}
      >
        <Box
          sx={{
            maxWidth: ['40px'],
            minWidth: ['40px'],
            pt: '6px'
          }}
        >
          <span
            sx={{
              fontSize: ['26px'],
              pr: [2],
              pl: [2],
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
              bg: 'background',
              py: [2],
              px: [2],
              fontSize: [4],
              borderColor: 'muted',
              borderStyle: 'solid',
              borderWidth: `2px`,
              borderRadius: [0],
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
