import React from "react";
import './TodoItem.css'

function TodoItem({ completed, onDelete, onComplete, text }) {
    
    return (
        <li className="TodoItem__li">
            <i
                className={`far fa-check-circle TodoItem__do ${completed && 'TodoItem__do--active'}`}
                onClick={onComplete}>
            </i>
            <p
                className={`TodoItem__text ${completed && 'TodoItem__text--complete'}`}>
                {text}
            </p>
            <i
                className={`far fa-times-circle TodoItem__delete`}
                onClick={onDelete}>
            </i>
        </li>
    )
}

export default TodoItem;