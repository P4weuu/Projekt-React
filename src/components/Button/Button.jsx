import React from "react";

function Button () {
    function handleClick() {
        console.log("Przycisk został kliknięty");
    }

    return <button onclick = {handleClick()}>Naciśnij mnie</button>
}

export default Button;