import React, {
  createContext,
  // Types
  ElementType,
  Fragment,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useId } from '../../hooks/use-id';
import { useResolveButtonType } from '../../hooks/use-resolve-button-type';
import { useSyncRefs } from '../../hooks/use-sync-refs';
import { Props } from '../../types';
import { isDisabledReactIssue7711 } from '../../utils/bugs';
import { render } from '../../utils/render';
import { Description, useDescriptions } from '../description/description';
import { Keys } from '../keyboard';
import { Label, useLabels } from '../label/label';

interface StateDefinition {
  switch: HTMLButtonElement | null;
  setSwitch(element: HTMLButtonElement): void;
  labelledby: string | undefined;
  describedby: string | undefined;
}

const GroupContext = createContext<StateDefinition | null>(null);
GroupContext.displayName = 'GroupContext';

// ---

const DEFAULT_GROUP_TAG = Fragment;

function Group<TTag extends ElementType = typeof DEFAULT_GROUP_TAG>(
  props: Props<TTag>
) {
  const [switchElement, setSwitchElement] = useState<HTMLButtonElement | null>(
    null
  );
  const [labelledby, LabelProvider] = useLabels();
  const [describedby, DescriptionProvider] = useDescriptions();

  const context = useMemo<StateDefinition>(
    () => ({
      switch: switchElement,
      setSwitch: setSwitchElement,
      labelledby,
      describedby,
    }),
    [switchElement, setSwitchElement, labelledby, describedby]
  );

  return (
    <DescriptionProvider name="Switch.Description">
      <LabelProvider
        name="Switch.Label"
        props={{
          onClick() {
            if (!switchElement) return;
            switchElement.click();
            switchElement.focus({ preventScroll: true });
          },
        }}
      >
        <GroupContext.Provider value={context}>
          {render({
            props,
            defaultTag: DEFAULT_GROUP_TAG,
            name: 'Switch.Group',
          })}
        </GroupContext.Provider>
      </LabelProvider>
    </DescriptionProvider>
  );
}

// ---

const DEFAULT_SWITCH_TAG = 'button' as const;
interface SwitchRenderPropArg {
  checked: boolean;
}
type SwitchPropsWeControl =
  | 'id'
  | 'role'
  | 'tabIndex'
  | 'aria-checked'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'onClick'
  | 'onKeyUp'
  | 'onKeyPress';

function Switch<TTag extends ElementType = typeof DEFAULT_SWITCH_TAG>(
  props: Props<
    TTag,
    SwitchRenderPropArg,
    SwitchPropsWeControl | 'checked' | 'onChange'
  > & {
    checked: boolean;
    onChange(checked: boolean): void;
  }
) {
  const { checked, onChange, ...passThroughProps } = props;
  const id = `headlessui-switch-${useId()}`;
  const groupContext = useContext(GroupContext);
  const internalSwitchRef: any = useRef<HTMLButtonElement | null>(null);
  const switchRef = useSyncRefs(
    internalSwitchRef,
    groupContext === null ? null : groupContext.setSwitch
  );

  const toggle = useCallback(() => onChange(!checked), [onChange, checked]);
  const handleClick = useCallback(
    (event: ReactMouseEvent) => {
      if (isDisabledReactIssue7711(event.currentTarget))
        return event.preventDefault();
      event.preventDefault();
      toggle();
    },
    [toggle]
  );
  const handleKeyUp = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>) => {
      if (event.key !== Keys.Tab) event.preventDefault();
      if (event.key === Keys.Space) toggle();
    },
    [toggle]
  );

  // This is needed so that we can "cancel" the click event when we use the `Enter` key on a button.
  const handleKeyPress = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>) => event.preventDefault(),
    []
  );

  const slot = useMemo<SwitchRenderPropArg>(() => ({ checked }), [checked]);
  const propsWeControl = {
    id,
    ref: switchRef,
    role: 'switch',
    type: useResolveButtonType(props, internalSwitchRef),
    tabIndex: 0,
    'aria-checked': checked,
    'aria-labelledby': groupContext?.labelledby,
    'aria-describedby': groupContext?.describedby,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyPress: handleKeyPress,
  };

  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_SWITCH_TAG,
    name: 'Switch',
  });
}

// ---

Switch.Group = Group;
Switch.Label = Label;
Switch.Description = Description;

export { Switch };
