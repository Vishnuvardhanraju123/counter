import React from "react";
import NavComponent from "./NavComponent";

function PhotoComponent() {
    return (
        <>
            <NavComponent />
            <div className="h-screen flex justify-center bg-green-500 items-center">
                <img className="rounded-xl " src="https://placehold.co/600x400" alt="placeholder" />
            </div>
        </>
    );
}
export default PhotoComponent;