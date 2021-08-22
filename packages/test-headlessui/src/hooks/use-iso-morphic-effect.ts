import { useEffect, useLayoutEffect } from 'react';

export const useIsoMorphicEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
