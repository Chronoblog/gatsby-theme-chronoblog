/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

import Button from './button';

export default () => {
  const [mode, setMode] = useColorMode();

  const cycle = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
  };

  const makeLabel = (modeParam) => (modeParam === 'dark' ? '🌙' : '☀️');
  const label = makeLabel(mode);

  return <Button onClick={cycle}>{label}</Button>;
};
