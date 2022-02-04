import React from "react";
import './TodoCounter.css';

function TodoCounter({ totalToDos, completedToDos }) {
    return (
        <div>
            <h1 className="TodoCounter">To Do <span>📝</span></h1>
            <p 
                className="TodoCounter__text">
                Have completed {completedToDos} from {totalToDos} tasks
            </p>
        </div>
    );
}


export default TodoCounter;