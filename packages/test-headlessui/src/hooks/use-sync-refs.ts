import { useCallback, useEffect, useRef } from 'react';

export function useSyncRefs<TType>(
  ...refs: (
    | React.MutableRefObject<TType>
    | ((instance: TType) => void)
    | null
  )[]
) {
  const cache = useRef(refs);

  useEffect(() => {
    cache.current = refs;
  }, [refs]);

  return useCallback(
    (value: TType) => {
      for (const ref of cache.current) {
        if (ref == null) continue;
        if (typeof ref === 'function') ref(value);
        else ref.current = value;
      }
    },
    [cache]
  );
}
