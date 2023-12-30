import React, { useRef } from "react";

function UseRefHookExample() {

    const reference = useRef('Karthi');

    function submitClick() {
        // const element = document.getElementById("inputText");
        const element = reference.current;
        if (element.value == '') {
            element.focus();
        }
    }

    return (
        <>
            <h1>UseRef Example</h1>
            <input type="text" id="inputText" ref={reference} /><button onClick={submitClick}>Submit</button>
        </>
    );
}

export default UseRefHookExample;