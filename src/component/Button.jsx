import React from "react";

const Button = ({setName}) => {
    return (
        <button onClick={() => setName("Ayush Singh")}>Click me</button>
    )
}

export default Button;
