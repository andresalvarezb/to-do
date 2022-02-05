import React, {useContext} from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const { totalToDos, completedToDos } = useContext(TodoContext);
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