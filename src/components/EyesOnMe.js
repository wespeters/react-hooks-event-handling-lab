import React from 'react';

function EyeseOnMe (){
    function handleFocus() {
        console.log("Good!");
    }

    function handleBlur() {
        console.log("Hey! Eyes on me!");
    }

    return (
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>
                Eyes on me
            </button>
        </div>
    );
}

export default EyeseOnMe;
