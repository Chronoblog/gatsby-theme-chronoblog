/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';

export default ({ value, onChange }) => {
  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        color: 'inherit',
        bg: 'muted',
        borderRadius: '5px',
        p: [1, 2]
      }}
    >
      <Box sx={{ maxWidth: ['0%', 40] }}>
        <span
          sx={{
            fontSize: [18, 26],
            px: [1, 2],
            opacity: [0, 1]
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
            p: [1],
            fontSize: [18, 26],
            border: `0px solid`,
            outline: '0px solid',
            '&:focus': {
              opacity: '1',
              outline: '0px solid'
            }
          }}
          placeholder="search"
          value={value}
          onChange={onChange}
        />
      </Box>
    </Flex>
  );
};
