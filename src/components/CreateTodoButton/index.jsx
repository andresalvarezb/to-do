import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton() {
    const { setOpenModal, openModal } = useContext(TodoContext)

    const onClickButton = () => {
        setOpenModal(!openModal)
    }

    return (
        <button
            className="CreateTodoButton__add"
            onClick={onClickButton}
        >
            {openModal ? 'x' : '+'}
        </button>
    )
}

export default CreateTodoButton;