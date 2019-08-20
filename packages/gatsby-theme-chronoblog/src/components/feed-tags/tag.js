/** @jsx jsx */
import { jsx } from 'theme-ui';

import Button from '../button';

export default ({ valueTag, tag, onClick }) => {
  // checked - true if the same data from tag
  const checkedCheck = (v, t) => v === t;
  const checked = checkedCheck(valueTag, tag);
  //
  return (
    <Button
      as="label"
      sx={{
        bg: checked ? 'primary' : 'muted',
        mr: ['10px'],
        mt: ['5px'],
        mb: ['5px']
      }}
    >
      <input
        sx={{
          opacity: 0,
          position: 'fixed',
          width: 0
        }}
        checked={checked}
        name="tag"
        value={tag}
        onClick={onClick}
        type="radio"
      />
      {`${tag}`}
    </Button>
  );
};
