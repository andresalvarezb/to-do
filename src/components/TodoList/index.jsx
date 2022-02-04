import React from "react";
import './TodoList.css'

function TodoList({children}) {
    return (
        <section>
            <ul className='TodoList__ul'>
            {children}
            </ul>
        </section>
    )
}

export default TodoList;