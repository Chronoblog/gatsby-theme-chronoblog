/** @jsx jsx */
import { useContext } from 'react';
import { Box, Flex, jsx } from 'theme-ui';

import FeedContext from '../../contexts/context-feed';

// export default ({ placeholder = 'search', value, onChange }) => {
export default ({ placeholder = 'search' }) => {
  const { value, onChange } = useContext(FeedContext);
  return (
    <Flex
      sx={{
        flexWrap: 'nowrap',
        color: 'inherit',
        bg: 'muted',
        borderRadius: '5px'
      }}
    >
      <Box sx={{ maxWidth: ['0%', 50], py: '1' }}>
        <span
          sx={{
            fontSize: [26],
            px: [0, 2],
            pl: [0, 3],
            opacity: [0, '0.7'],
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
          value={value}
          onChange={onChange}
        />
      </Box>
    </Flex>
  );
};
