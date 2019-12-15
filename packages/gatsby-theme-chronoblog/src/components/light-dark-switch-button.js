/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

/**
 * @typedef {object} Props
 * @property {string=} darkLabel
 * @property {string=} lightLabel
 * @property {number | string=} fontSize
 */

/**
 * @param {Props} props
 */
export default ({
  darkLabel = '🌙',
  lightLabel = '☀️',
  fontSize = 28,
  ...props
}) => {
  const [mode, setMode] = useColorMode();

  const cycle = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
  };

  const makeLabel = (modeParam) =>
    modeParam === 'dark' ? darkLabel : lightLabel;

  return (
    <button
      type="button"
      sx={{
        appearance: 'none',
        fontSize,
        color: 'inherit',
        fontFamily: 'inherit',
        bg: '#ffffff00',
        border: 0,
        '&:focus': {
          outline: '0px'
        },
        userSelect: 'none',
        cursor: 'pointer'
      }}
      onClick={cycle}
      {...props}
    >
      {makeLabel(mode)}
    </button>
  );
};
