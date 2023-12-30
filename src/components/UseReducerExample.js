import { useState, useReducer } from "react";

function UseReducerExample() {
    // const [count, setCount] = useState(0);

    // function add() {
    //     setCount((count) => count + 1);
    // }

    // function subtract() {
    //     setCount((count) => count - 1);
    // }

    // function reset() {
    //     setCount(0);
    // }


    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'subtract':
                return state - 1;
            case 'reset':
                return 0;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                <h1>UseReducer Example</h1>
                <h2>Count: {count}</h2>
                <button onClick={() => dispatch('add')}>Add</button>&nbsp;
                <button onClick={() => dispatch('subtract')}>Subtract</button>&nbsp;
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>
        </>
    );
}

export default UseReducerExample; 