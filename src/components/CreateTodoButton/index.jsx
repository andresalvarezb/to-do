import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {
    const onClickButton = (message) => { console.log(message) }

    return (
        <button 
            className="CreateTodoButton__add"
            onClick={() => onClickButton('click')}
        >+</button>
    )
}

export default CreateTodoButton;