import React from "react";

function app() {
    const [count, statecount] = React.useState();
    // count is a variable and statecount is a function
    return (
        <button onClick={() => statecount(count + 1)}>count : {count}</button>
    ); removeEventListener
}