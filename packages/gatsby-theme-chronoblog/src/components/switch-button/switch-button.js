/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

import Button from './button';

const modes = ['light', 'dark'];

export default () => {
  const [mode, setMode] = useColorMode();

  const cycle = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[i]);
  };

  return <Button onClick={cycle}>{mode}</Button>;
};
