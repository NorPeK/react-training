import React, {useState, useEffect, useRef} from "react";

function TryUseRef(){

    const inputRef = useRef(null);

    console.log(inputRef);
    

    useEffect(() => {
        console.log("COMPONENT RENDERED");
        
    })
    
    function handleClick() {
        inputRef.current.focus();
        
    }
    
    return(
        <div>
            <button onClick={handleClick}>
            Click me!
            </button>
            <input ref={inputRef}/>
        </div>
        
    )
}

export default TryUseRef