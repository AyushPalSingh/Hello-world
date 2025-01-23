import React from "react";
import { useState } from "react";
import Button from "../component/Button";

const PropsLearning = () => {
    
    const [name,setName] = useState("");
    
    return (
        <div>
            <p>{name}</p>
            <Button setName={setName}></Button>
        </div>
    )
}

export default PropsLearning;
