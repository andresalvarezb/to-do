import React from 'react';
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateTodoButton from "../components/CreateTodoButton";


function AppUI({
	totalToDos,
    completedToDos, 
	searchedToDos,
    searchValue, 
    setSearchValue, 
    completeToDo, 
    deleteToDo,
}) {

    return (
        <React.Fragment>
            <TodoCounter totalToDos={totalToDos} completedToDos={completedToDos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			<TodoList>
				{
					searchedToDos.map((toDo, index) => (
						<TodoItem key={index} text={toDo.text} completed={toDo.completed} onComplete={() => completeToDo(toDo.text)} onDelete={() => deleteToDo(toDo.text)}/>
					))
				}
			</TodoList>
			<CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };