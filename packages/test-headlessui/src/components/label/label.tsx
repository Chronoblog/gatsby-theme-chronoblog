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
  slot?: {};
  name?: string;
  props?: {};
}

const LabelContext = createContext<
  ({ register(value: string): () => void } & SharedData) | null
>(null);

function useLabelContext() {
  const context = useContext(LabelContext);
  if (context === null) {
    const err = new Error(
      'You used a <Label /> component, but it is not inside a relevant parent.'
    );
    if (Error.captureStackTrace) Error.captureStackTrace(err, useLabelContext);
    throw err;
  }
  return context;
}

interface LabelProviderProps extends SharedData {
  children: ReactNode;
}

export function useLabels(): [
  string | undefined,
  (props: LabelProviderProps) => JSX.Element
] {
  const [labelIds, setLabelIds] = useState<string[]>([]);

  return [
    // The actual id's as string or undefined.
    labelIds.length > 0 ? labelIds.join(' ') : undefined,

    // The provider component
    useMemo(() => {
      return function LabelProvider(props: LabelProviderProps) {
        const register = useCallback((value: string) => {
          setLabelIds((existing) => [...existing, value]);

          return () =>
            setLabelIds((existing) => {
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
          <LabelContext.Provider value={contextBag}>
            {props.children}
          </LabelContext.Provider>
        );
      };
    }, [setLabelIds]),
  ];
}

// ---

const DEFAULT_LABEL_TAG = 'label' as const;
interface LabelRenderPropArg {}
type LabelPropsWeControl = 'id';

export function Label<TTag extends ElementType = typeof DEFAULT_LABEL_TAG>(
  props: Props<TTag, LabelRenderPropArg, LabelPropsWeControl> & {
    passive?: boolean;
  }
) {
  const { passive = false, ...passThroughProps } = props;
  const context = useLabelContext();
  const id = `headlessui-label-${useId()}`;

  useIsoMorphicEffect(() => context.register(id), [id, context.register]);

  const propsWeControl = { ...context.props, id };

  const allProps = { ...passThroughProps, ...propsWeControl };
  // @ts-expect-error props are dynamic via context, some components will
  //                  provide an onClick then we can delete it.
  if (passive) delete allProps['onClick'];

  return render({
    props: allProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_LABEL_TAG,
    name: context.name || 'Label',
  });
}
