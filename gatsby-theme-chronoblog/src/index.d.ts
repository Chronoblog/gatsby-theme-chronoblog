import { DOMAttributes } from 'react';

// For no Error about checking of libs declaration files
// declare module '*';
declare module 'theme-ui';

// typescript don't know prop `sx` from theme-ui.com/sx-prop
// https://github.com/emotion-js/emotion/issues/1249
declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    sx?: Record<string, any>;
    py?: number;
  }
}
