/** @jsx jsx */
import { jsx } from 'theme-ui';

export default ({ valueTag, tag, onClick }) => {
  // checked - true if the same data from tag
  const checkedCheck = (v, t) => v === t;
  const checked = checkedCheck(valueTag, tag);
  //
  return (
    <label>
      <input
        checked={checked}
        name="tag"
        value={tag}
        onClick={onClick}
        type="radio"
      />
      {`${tag}`}
    </label>
  );
};
