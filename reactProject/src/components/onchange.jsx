import React, {useState} from "react";

function OnChange() {
    const [name , setName] = useState("Guest");

    function handleNameClick(e) {
        setName(e.target.value)
    }

    return(
        <div>
            <input value = {name} onChange={handleNameClick} />
            <p>Name : {name}</p>
        </div>
    );
}

export default OnChange