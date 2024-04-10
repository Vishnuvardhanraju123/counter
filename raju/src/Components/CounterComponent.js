import React, { useState } from "react";

function CounterApp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div>
                <h1>Counter app</h1>
                <h1>Count: {count}</h1>
                <div className="h-screen">

                    <button className="font-bold hover:bg-red-400 " onClick={increment}>increment</button>
                    <button className="font-bold hover:bg-red-400" onClick={decrement}>decrement</button>
                </div>

            </div>
        </>
    );
}

export default CounterApp;
