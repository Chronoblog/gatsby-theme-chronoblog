import React, { createContext, useCallback, useContext, useMemo, useState, } from 'react';
import { useId } from '../../hooks/use-id';
import { useIsoMorphicEffect } from '../../hooks/use-iso-morphic-effect';
import { render } from '../../utils/render';
const DescriptionContext = createContext(null);
function useDescriptionContext() {
    const context = useContext(DescriptionContext);
    if (context === null) {
        const err = new Error('You used a <Description /> component, but it is not inside a relevant parent.');
        if (Error.captureStackTrace)
            Error.captureStackTrace(err, useDescriptionContext);
        throw err;
    }
    return context;
}
export function useDescriptions() {
    const [descriptionIds, setDescriptionIds] = useState([]);
    return [
        // The actual id's as string or undefined
        descriptionIds.length > 0 ? descriptionIds.join(' ') : undefined,
        // The provider component
        useMemo(() => {
            return function DescriptionProvider(props) {
                const register = useCallback((value) => {
                    setDescriptionIds((existing) => [...existing, value]);
                    return () => setDescriptionIds((existing) => {
                        const clone = existing.slice();
                        const idx = clone.indexOf(value);
                        if (idx !== -1)
                            clone.splice(idx, 1);
                        return clone;
                    });
                }, []);
                const contextBag = useMemo(() => ({
                    register,
                    slot: props.slot,
                    name: props.name,
                    props: props.props,
                }), [register, props.slot, props.name, props.props]);
                return (React.createElement(DescriptionContext.Provider, { value: contextBag }, props.children));
            };
        }, [setDescriptionIds]),
    ];
}
// ---
const DEFAULT_DESCRIPTION_TAG = 'p';
export function Description(props) {
    const context = useDescriptionContext();
    const id = `headlessui-description-${useId()}`;
    useIsoMorphicEffect(() => context.register(id), [id, context.register]);
    const passThroughProps = props;
    const propsWeControl = Object.assign(Object.assign({}, context.props), { id });
    return render({
        props: Object.assign(Object.assign({}, passThroughProps), propsWeControl),
        slot: context.slot || {},
        defaultTag: DEFAULT_DESCRIPTION_TAG,
        name: context.name || 'Description',
    });
}
