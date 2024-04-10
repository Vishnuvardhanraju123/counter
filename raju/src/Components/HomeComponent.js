import React from "react";
import NavComponent from "./NavComponent";


function HomeComponent() {
    return (
        <>
        <NavComponent/>
            <div className="h-screen flex justify-center items-center bg-lime-600">
                <h1 className="text-black font-bold text-4xl bg-400">HELLO</h1>
            </div>
        </>
    );
}
export default HomeComponent;