import React from 'react';
const Feed = () => {
    return (React.createElement("div", null,
        React.createElement("p", { className: "font-sans text-9xl" }, "Feed - some"),
        React.createElement("div", { className: "grid grid-cols-3 gap-4" },
            React.createElement("div", null, "1"),
            React.createElement("div", null, "1"),
            React.createElement("div", null, "1")),
        React.createElement("div", { className: "box-content h-32 w-32 p-4 border-4" }, "test"),
        React.createElement("div", { className: "grid grid-cols-3 gap-2 place-content-center h-48" },
            React.createElement("div", null, "1"),
            React.createElement("div", null, "2"),
            React.createElement("div", null, "3"),
            React.createElement("div", null, "4"),
            React.createElement("div", null, "5"),
            React.createElement("div", { className: "text-green-500" }, "6 some some some")),
        React.createElement("input", { className: "placeholder-green-500", placeholder: "jane@example.com" })));
};
export { Feed };
