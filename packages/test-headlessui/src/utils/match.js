"use strict";
exports.__esModule = true;
exports.match = void 0;
function match(value, lookup) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (value in lookup) {
        var returnValue = lookup[value];
        return typeof returnValue === 'function'
            ? returnValue.apply(void 0, args) : returnValue;
    }
    var error = new Error("Tried to handle \"" + value + "\" but there is no handler defined. Only defined handlers are: " + Object.keys(lookup)
        .map(function (key) { return "\"" + key + "\""; })
        .join(', ') + ".");
    if (Error.captureStackTrace)
        Error.captureStackTrace(error, match);
    throw error;
}
exports.match = match;
