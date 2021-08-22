"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.forwardRefWithAs = exports.render = exports.RenderStrategy = exports.Features = void 0;
var react_1 = require("react");
var match_1 = require("./match");
var Features;
(function (Features) {
    /** No features at all */
    Features[Features["None"] = 0] = "None";
    /**
     * When used, this will allow us to use one of the render strategies.
     *
     * **The render strategies are:**
     *    - **Unmount**   _(Will unmount the component.)_
     *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
     */
    Features[Features["RenderStrategy"] = 1] = "RenderStrategy";
    /**
     * When used, this will allow the user of our component to be in control. This can be used when
     * you want to transition based on some state.
     */
    Features[Features["Static"] = 2] = "Static";
})(Features = exports.Features || (exports.Features = {}));
var RenderStrategy;
(function (RenderStrategy) {
    RenderStrategy[RenderStrategy["Unmount"] = 0] = "Unmount";
    RenderStrategy[RenderStrategy["Hidden"] = 1] = "Hidden";
})(RenderStrategy = exports.RenderStrategy || (exports.RenderStrategy = {}));
function render(_a) {
    var _b;
    var props = _a.props, slot = _a.slot, defaultTag = _a.defaultTag, features = _a.features, _c = _a.visible, visible = _c === void 0 ? true : _c, name = _a.name;
    // Visible always render
    if (visible)
        return _render(props, slot, defaultTag, name);
    var featureFlags = features !== null && features !== void 0 ? features : Features.None;
    if (featureFlags & Features.Static) {
        var _d = props, _e = _d.static, isStatic = _e === void 0 ? false : _e, rest = __rest(_d, ["static"]);
        // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else
        if (isStatic)
            return _render(rest, slot, defaultTag, name);
    }
    if (featureFlags & Features.RenderStrategy) {
        var _f = props, _g = _f.unmount, unmount = _g === void 0 ? true : _g, rest_1 = __rest(_f, ["unmount"]);
        var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
        return match_1.match(strategy, (_b = {},
            _b[RenderStrategy.Unmount] = function () {
                return null;
            },
            _b[RenderStrategy.Hidden] = function () {
                return _render(__assign(__assign({}, rest_1), { hidden: true, style: { display: 'none' } }), slot, defaultTag, name);
            },
            _b));
    }
    // No features enabled, just render
    return _render(props, slot, defaultTag, name);
}
exports.render = render;
function _render(props, slot, tag, name) {
    var _a;
    if (slot === void 0) { slot = {}; }
    var _b = omit(props, ['unmount', 'static']), _c = _b.as, Component = _c === void 0 ? tag : _c, children = _b.children, _d = _b.refName, refName = _d === void 0 ? 'ref' : _d, passThroughProps = __rest(_b, ["as", "children", "refName"]);
    // This allows us to use `<HeadlessUIComponent as={MyComponent} refName="innerRef" />`
    var refRelatedProps = props.ref !== undefined ? (_a = {}, _a[refName] = props.ref, _a) : {};
    var resolvedChildren = (typeof children === 'function' ? children(slot) : children);
    // Allow for className to be a function with the slot as the contents
    if (passThroughProps.className &&
        typeof passThroughProps.className === 'function') {
        passThroughProps.className = passThroughProps.className(slot);
    }
    if (Component === react_1.Fragment) {
        if (Object.keys(passThroughProps).length > 0) {
            if (!react_1.isValidElement(resolvedChildren) ||
                (Array.isArray(resolvedChildren) && resolvedChildren.length > 1)) {
                throw new Error([
                    'Passing props on "Fragment"!',
                    '',
                    "The current component <" + name + " /> is rendering a \"Fragment\".",
                    'However we need to passthrough the following props:',
                    Object.keys(passThroughProps)
                        .map(function (line) { return "  - " + line; })
                        .join('\n'),
                    '',
                    'You can apply a few solutions:',
                    [
                        'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                        'Render a single element as the child so that we can forward the props onto that element.',
                    ]
                        .map(function (line) { return "  - " + line; })
                        .join('\n'),
                ].join('\n'));
            }
            return react_1.cloneElement(resolvedChildren, Object.assign({}, 
            // Filter out undefined values so that they don't override the existing values
            mergeEventFunctions(compact(omit(passThroughProps, ['ref'])), resolvedChildren.props, ['onClick']), refRelatedProps));
        }
    }
    return react_1.createElement(Component, Object.assign({}, omit(passThroughProps, ['ref']), Component !== react_1.Fragment && refRelatedProps), resolvedChildren);
}
/**
 * We can use this function for the following useCase:
 *
 * <Menu.Item> <button onClick={console.log} /> </Menu.Item>
 *
 * Our `Menu.Item` will have an internal `onClick`, if you passthrough an `onClick` to the actual
 * `Menu.Item` component we will call it correctly. However, when we have an `onClick` on the actual
 * first child, that one should _also_ be called (but before this implementation, it was just
 * overriding the `onClick`). But it is only when we *render* that we have access to the existing
 * props of this component.
 *
 * It's a bit hacky, and not that clean, but it is something internal and we have tests to rely on
 * so that we can refactor this later (if needed).
 */
function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
    var clone = Object.assign({}, passThroughProps);
    var _loop_1 = function (func) {
        var _a;
        if (passThroughProps[func] !== undefined &&
            existingProps[func] !== undefined) {
            Object.assign(clone, (_a = {},
                _a[func] = function (event) {
                    // Props we control
                    if (!event.defaultPrevented)
                        passThroughProps[func](event);
                    // Existing props on the component
                    if (!event.defaultPrevented)
                        existingProps[func](event);
                },
                _a));
        }
    };
    for (var _i = 0, functionsToMerge_1 = functionsToMerge; _i < functionsToMerge_1.length; _i++) {
        var func = functionsToMerge_1[_i];
        _loop_1(func);
    }
    return clone;
}
/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */
function forwardRefWithAs(component) {
    var _a;
    return Object.assign(react_1.forwardRef(component), {
        displayName: (_a = component.displayName) !== null && _a !== void 0 ? _a : component.name
    });
}
exports.forwardRefWithAs = forwardRefWithAs;
function compact(object) {
    var clone = Object.assign({}, object);
    for (var key in clone) {
        if (clone[key] === undefined)
            delete clone[key];
    }
    return clone;
}
function omit(object, keysToOmit) {
    if (keysToOmit === void 0) { keysToOmit = []; }
    var clone = Object.assign({}, object);
    for (var _i = 0, keysToOmit_1 = keysToOmit; _i < keysToOmit_1.length; _i++) {
        var key = keysToOmit_1[_i];
        if (key in clone)
            delete clone[key];
    }
    return clone;
}
