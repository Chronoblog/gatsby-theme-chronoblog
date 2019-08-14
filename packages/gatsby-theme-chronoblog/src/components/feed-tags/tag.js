/** @jsx jsx */
import { jsx } from 'theme-ui';

export default ({ tag, onClick }) => {
  return (
    <label>
      <input name="tag" value={tag} onClick={onClick} type="radio" />
      {`${tag} `}
    </label>
  );
};
