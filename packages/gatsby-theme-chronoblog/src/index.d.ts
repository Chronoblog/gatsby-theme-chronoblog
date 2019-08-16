import { DOMAttributes } from 'react';

// For no Error about checking of libs declaration files
// declare module 'theme-ui';
// declare module '*';
declare module '*.mdx';

// typescript don't know prop `sx` from theme-ui.com/sx-prop
// https://github.com/emotion-js/emotion/issues/1249
declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    sx?: Record<string, any>;
    py?: number;
  }
}

// input value from
// https://github.com/rehooks/input-value/blob/master/index.d.ts
export interface InputValue<T> {
  value: T;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
