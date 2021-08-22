import React, {
  ContextType,
  createContext,
  Dispatch,
  // Types
  ElementType,
  Fragment,
  KeyboardEvent as ReactKeyboardEvent,
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';

import { Keys } from '../../components/keyboard';
import { useId } from '../../hooks/use-id';
import { useIsoMorphicEffect } from '../../hooks/use-iso-morphic-effect';
import { useSyncRefs } from '../../hooks/use-sync-refs';
import { Props } from '../../types';
import { Focus, focusIn } from '../../utils/focus-management';
import { match } from '../../utils/match';
import { Features, PropsForFeatures, render } from '../../utils/render';

interface StateDefinition {
  selectedIndex: number | null;

  orientation: 'horizontal' | 'vertical';
  activation: 'auto' | 'manual';

  tabs: MutableRefObject<HTMLElement | null>[];
  panels: MutableRefObject<HTMLElement | null>[];
}

enum ActionTypes {
  SetSelectedIndex,
  SetOrientation,
  SetActivation,

  RegisterTab,
  UnregisterTab,

  RegisterPanel,
  UnregisterPanel,

  ForceRerender,
}

type Actions =
  | { type: ActionTypes.SetSelectedIndex; index: number }
  | {
      type: ActionTypes.SetOrientation;
      orientation: StateDefinition['orientation'];
    }
  | {
      type: ActionTypes.SetActivation;
      activation: StateDefinition['activation'];
    }
  | { type: ActionTypes.RegisterTab; tab: MutableRefObject<HTMLElement | null> }
  | {
      type: ActionTypes.UnregisterTab;
      tab: MutableRefObject<HTMLElement | null>;
    }
  | {
      type: ActionTypes.RegisterPanel;
      panel: MutableRefObject<HTMLElement | null>;
    }
  | {
      type: ActionTypes.UnregisterPanel;
      panel: MutableRefObject<HTMLElement | null>;
    }
  | { type: ActionTypes.ForceRerender };

const reducers: {
  [P in ActionTypes]: (
    state: StateDefinition,
    action: Extract<Actions, { type: P }>
  ) => StateDefinition;
} = {
  [ActionTypes.SetSelectedIndex](state, action) {
    if (state.selectedIndex === action.index) return state;
    return { ...state, selectedIndex: action.index };
  },
  [ActionTypes.SetOrientation](state, action) {
    if (state.orientation === action.orientation) return state;
    return { ...state, orientation: action.orientation };
  },
  [ActionTypes.SetActivation](state, action) {
    if (state.activation === action.activation) return state;
    return { ...state, activation: action.activation };
  },
  [ActionTypes.RegisterTab](state, action) {
    if (state.tabs.includes(action.tab)) return state;
    return { ...state, tabs: [...state.tabs, action.tab] };
  },
  [ActionTypes.UnregisterTab](state, action) {
    return { ...state, tabs: state.tabs.filter((tab) => tab !== action.tab) };
  },
  [ActionTypes.RegisterPanel](state, action) {
    if (state.panels.includes(action.panel)) return state;
    return { ...state, panels: [...state.panels, action.panel] };
  },
  [ActionTypes.UnregisterPanel](state, action) {
    return {
      ...state,
      panels: state.panels.filter((panel) => panel !== action.panel),
    };
  },
  [ActionTypes.ForceRerender](state) {
    return { ...state };
  },
};

const TabsContext = createContext<
  | [
      StateDefinition,
      { change(index: number): void; dispatch: Dispatch<Actions> }
    ]
  | null
>(null);
TabsContext.displayName = 'TabsContext';

function useTabsContext(component: string) {
  const context = useContext(TabsContext);
  if (context === null) {
    const err = new Error(
      `<${component} /> is missing a parent <Tab.Group /> component.`
    );
    if (Error.captureStackTrace) Error.captureStackTrace(err, useTabsContext);
    throw err;
  }
  return context;
}

function stateReducer(state: StateDefinition, action: Actions) {
  return match(action.type, reducers, state, action);
}

// ---

const DEFAULT_TABS_TAG = Fragment;
interface TabsRenderPropArg {
  selectedIndex: number;
}

function Tabs<TTag extends ElementType = typeof DEFAULT_TABS_TAG>(
  props: Props<TTag, TabsRenderPropArg> & {
    defaultIndex?: number;
    onChange?: (index: number) => void;
    vertical?: boolean;
    manual?: boolean;
  }
) {
  const {
    defaultIndex = 0,
    vertical = false,
    manual = false,
    onChange,
    ...passThroughProps
  } = props;
  const orientation = vertical ? 'vertical' : 'horizontal';
  const activation = manual ? 'manual' : 'auto';

  const [state, dispatch] = useReducer(stateReducer, {
    selectedIndex: null,
    tabs: [],
    panels: [],
    orientation,
    activation,
  } as StateDefinition);
  const slot = useMemo(
    () => ({ selectedIndex: state.selectedIndex }),
    [state.selectedIndex]
  );
  const onChangeRef = useRef<(index: number) => void>(() => {});

  useEffect(() => {
    dispatch({ type: ActionTypes.SetOrientation, orientation });
  }, [orientation]);

  useEffect(() => {
    dispatch({ type: ActionTypes.SetActivation, activation });
  }, [activation]);

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChangeRef.current = onChange;
    }
  }, [onChange]);

  useEffect(() => {
    if (state.tabs.length <= 0) return;
    if (state.selectedIndex !== null) return;

    const tabs = state.tabs
      .map((tab) => tab.current)
      .filter(Boolean) as HTMLElement[];
    const focusableTabs = tabs.filter((tab) => !tab.hasAttribute('disabled'));

    // Underflow
    if (defaultIndex < 0) {
      dispatch({
        type: ActionTypes.SetSelectedIndex,
        index: tabs.indexOf(focusableTabs[0]),
      });
    }

    // Overflow
    else if (defaultIndex > state.tabs.length) {
      dispatch({
        type: ActionTypes.SetSelectedIndex,
        index: tabs.indexOf(focusableTabs[focusableTabs.length - 1]),
      });
    }

    // Middle
    else {
      const before = tabs.slice(0, defaultIndex);
      const after = tabs.slice(defaultIndex);

      const next = [...after, ...before].find((tab) =>
        focusableTabs.includes(tab)
      );
      if (!next) return;

      dispatch({
        type: ActionTypes.SetSelectedIndex,
        index: tabs.indexOf(next),
      });
    }
  }, [defaultIndex, state.tabs, state.selectedIndex]);

  const lastChangedIndex = useRef(state.selectedIndex);
  const providerBag = useMemo<ContextType<typeof TabsContext>>(
    () => [
      state,
      {
        dispatch,
        change(index: number) {
          if (lastChangedIndex.current !== index) onChangeRef.current(index);
          lastChangedIndex.current = index;

          dispatch({ type: ActionTypes.SetSelectedIndex, index });
        },
      },
    ],
    [state, dispatch]
  );

  return (
    <TabsContext.Provider value={providerBag}>
      {render({
        props: { ...passThroughProps },
        slot,
        defaultTag: DEFAULT_TABS_TAG,
        name: 'Tabs',
      })}
    </TabsContext.Provider>
  );
}

// ---

const DEFAULT_LIST_TAG = 'div' as const;
interface ListRenderPropArg {
  selectedIndex: number;
}
type ListPropsWeControl = 'role' | 'aria-orientation';

function List<TTag extends ElementType = typeof DEFAULT_LIST_TAG>(
  props: Props<TTag, ListRenderPropArg, ListPropsWeControl> & any
) {
  const [{ selectedIndex, orientation }] = useTabsContext(
    [Tab.name, List.name].join('.')
  );

  const slot = { selectedIndex };
  const propsWeControl = {
    role: 'tablist',
    'aria-orientation': orientation,
  };
  const passThroughProps = props;

  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_LIST_TAG,
    name: 'Tabs.List',
  });
}

// ---

const DEFAULT_TAB_TAG = 'button' as const;
interface TabRenderPropArg {
  selected: boolean;
}
type TabPropsWeControl =
  | 'id'
  | 'role'
  | 'type'
  | 'aria-controls'
  | 'aria-selected'
  | 'tabIndex';

export function Tab<TTag extends ElementType = typeof DEFAULT_TAB_TAG>(
  props: Props<TTag, TabRenderPropArg, TabPropsWeControl>
) {
  const id = `headlessui-tabs-tab-${useId()}`;

  const [
    { selectedIndex, tabs, panels, orientation, activation },
    { dispatch, change },
  ] = useTabsContext(Tab.name);

  const internalTabRef = useRef<HTMLElement>(null);
  const tabRef = useSyncRefs(internalTabRef, (element: any) => {
    if (!element) return;
    dispatch({ type: ActionTypes.ForceRerender });
  });

  useIsoMorphicEffect(() => {
    dispatch({ type: ActionTypes.RegisterTab, tab: internalTabRef });
    return () =>
      dispatch({ type: ActionTypes.UnregisterTab, tab: internalTabRef });
  }, [dispatch, internalTabRef]);

  const myIndex = tabs.indexOf(internalTabRef);
  const selected = myIndex === selectedIndex;

  const handleKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>) => {
      const list = tabs
        .map((tab) => tab.current)
        .filter(Boolean) as HTMLElement[];

      if (event.key === Keys.Space || event.key === Keys.Enter) {
        event.preventDefault();
        event.stopPropagation();

        change(myIndex);
        return;
      }

      switch (event.key) {
        case Keys.Home:
        case Keys.PageUp:
          event.preventDefault();
          event.stopPropagation();

          return focusIn(list, Focus.First);

        case Keys.End:
        case Keys.PageDown:
          event.preventDefault();
          event.stopPropagation();

          return focusIn(list, Focus.Last);
      }

      return match(orientation, {
        vertical() {
          if (event.key === Keys.ArrowUp)
            return focusIn(list, Focus.Previous | Focus.WrapAround);
          if (event.key === Keys.ArrowDown)
            return focusIn(list, Focus.Next | Focus.WrapAround);
          return;
        },
        horizontal() {
          if (event.key === Keys.ArrowLeft)
            return focusIn(list, Focus.Previous | Focus.WrapAround);
          if (event.key === Keys.ArrowRight)
            return focusIn(list, Focus.Next | Focus.WrapAround);
          return;
        },
      });
    },
    [tabs, orientation, myIndex, change]
  );

  const handleFocus = useCallback(() => {
    internalTabRef.current?.focus();
  }, [internalTabRef]);

  const handleSelection = useCallback(() => {
    internalTabRef.current?.focus();
    change(myIndex);
  }, [change, myIndex, internalTabRef]);

  const type =
    props?.type ?? (props.as || DEFAULT_TAB_TAG) === 'button'
      ? 'button'
      : undefined;

  const slot = useMemo(() => ({ selected }), [selected]);
  const propsWeControl = {
    ref: tabRef,
    onKeyDown: handleKeyDown,
    onFocus: activation === 'manual' ? handleFocus : handleSelection,
    onClick: handleSelection,
    id,
    role: 'tab',
    type,
    'aria-controls': panels[myIndex]?.current?.id,
    'aria-selected': selected,
    tabIndex: selected ? 0 : -1,
  };
  const passThroughProps = props;

  if (process.env.NODE_ENV === 'test') {
    Object.assign(propsWeControl, { 'data-headlessui-index': myIndex });
  }

  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_TAB_TAG,
    name: 'Tabs.Tab',
  });
}

// ---

const DEFAULT_PANELS_TAG = 'div' as const;
interface PanelsRenderPropArg {
  selectedIndex: number;
}

function Panels<TTag extends ElementType = typeof DEFAULT_PANELS_TAG>(
  props: Props<TTag, PanelsRenderPropArg>
) {
  const [{ selectedIndex }] = useTabsContext([Tab.name, Panels.name].join('.'));

  const slot = useMemo(() => ({ selectedIndex }), [selectedIndex]);

  return render({
    props,
    slot,
    defaultTag: DEFAULT_PANELS_TAG,
    name: 'Tabs.Panels',
  });
}

// ---

const DEFAULT_PANEL_TAG = 'div' as const;
interface PanelRenderPropArg {
  selected: boolean;
}
type PanelPropsWeControl = 'id' | 'role' | 'aria-labelledby' | 'tabIndex';
const PanelRenderFeatures = Features.RenderStrategy | Features.Static;

function Panel<TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(
  props: Props<TTag, PanelRenderPropArg, PanelPropsWeControl> &
    PropsForFeatures<typeof PanelRenderFeatures>
) {
  const [{ selectedIndex, tabs, panels }, { dispatch }] = useTabsContext(
    [Tab.name, Panel.name].join('.')
  );

  const id = `headlessui-tabs-panel-${useId()}`;
  const internalPanelRef = useRef<HTMLElement>(null);
  const panelRef = useSyncRefs(internalPanelRef, (element: any) => {
    if (!element) return;
    dispatch({ type: ActionTypes.ForceRerender });
  });

  useIsoMorphicEffect(() => {
    dispatch({ type: ActionTypes.RegisterPanel, panel: internalPanelRef });
    return () =>
      dispatch({ type: ActionTypes.UnregisterPanel, panel: internalPanelRef });
  }, [dispatch, internalPanelRef]);

  const myIndex = panels.indexOf(internalPanelRef);
  const selected = myIndex === selectedIndex;

  const slot = useMemo(() => ({ selected }), [selected]);
  const propsWeControl = {
    ref: panelRef,
    id,
    role: 'tabpanel',
    'aria-labelledby': tabs[myIndex]?.current?.id,
    tabIndex: selected ? 0 : -1,
  };

  if (process.env.NODE_ENV === 'test') {
    Object.assign(propsWeControl, { 'data-headlessui-index': myIndex });
  }

  const passThroughProps = props;

  return render({
    props: { ...passThroughProps, ...propsWeControl },
    slot,
    defaultTag: DEFAULT_PANEL_TAG,
    features: PanelRenderFeatures,
    visible: selected,
    name: 'Tabs.Panel',
  });
}

// ---

Tab.Group = Tabs;
Tab.List = List;
Tab.Panels = Panels;
Tab.Panel = Panel;
