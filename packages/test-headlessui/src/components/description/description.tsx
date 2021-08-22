import React, {
  createContext,
  // Types
  ElementType,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { useId } from '../../hooks/use-id';
import { useIsoMorphicEffect } from '../../hooks/use-iso-morphic-effect';
import { Props } from '../../types';
import { render } from '../../utils/render';

// ---

interface SharedData {
  slot?: any;
  name?: string;
  props?: any;
}

const DescriptionContext = createContext<
  ({ register(value: string): () => void } & SharedData) | null
>(null);

function useDescriptionContext() {
  const context = useContext(DescriptionContext);
  if (context === null) {
    const err = new Error(
      'You used a <Description /> component, but it is not inside a relevant parent.'
    );
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDescriptionContext);
    throw err;
  }
  return context;
}

interface DescriptionProviderProps extends SharedData {
  children: ReactNode;
}

export function useDescriptions(): [
  string | undefined,
  (props: DescriptionProviderProps) => JSX.Element
] {
  const [descriptionIds, setDescriptionIds] = useState<string[]>([]);

  return [
    // The actual id's as string or undefined
    descriptionIds.length > 0 ? descriptionIds.join(' ') : undefined,

    // The provider component
    useMemo(() => {
      return function DescriptionProvider(props: DescriptionProviderProps) {
        const register = useCallback((value: string) => {
          setDescriptionIds((existing) => [...existing, value]);

          return () =>
            setDescriptionIds((existing) => {
              const clone = existing.slice();
              const idx = clone.indexOf(value);
              if (idx !== -1) clone.splice(idx, 1);
              return clone;
            });
        }, []);

        const contextBag = useMemo(
          () => ({
            register,
            slot: props.slot,
            name: props.name,
            props: props.props,
          }),
          [register, props.slot, props.name, props.props]
        );

        return (
          <DescriptionContext.Provider value={contextBag}>
            {props.children}
          </DescriptionContext.Provider>
        );
      };
    }, [setDescriptionIds]),
  ];
}

// ---

const DEFAULT_DESCRIPTION_TAG = 'p' as const;
type DescriptionPropsWeControl = 'id';

function Description<TTag extends ElementType = typeof DEFAULT_DESCRIPTION_TAG>(
  props: Props<TTag, any, DescriptionPropsWeControl>
) {
  const context = useDescriptionContext();
  const id = `headlessui-description-${useId()}`;

  useIsoMorphicEffect(() => context.register(id), [id, context.register]);

  const passThroughProps = props;
  const propsWeControl = { ...context.props, id };

  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot: context.slot || {},
    defaultTag: DEFAULT_DESCRIPTION_TAG,
    name: context.name || 'Description',
  });
}

export { Description };
