import React from 'react';
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateTodoButton from "../components/CreateTodoButton";
import { TodoContext } from '../components/TodoContext';


function AppUI() {

	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoContext.Consumer>
				{
					({ error, loading, searchedToDos, completeToDo, deleteToDo }) => (
						<TodoList>
							{error && <p>There is a error</p>}
							{loading && <p>we are loading...</p>}
							{(!loading && !searchedToDos.length) && <p>Create you first to-do</p>}
							{
								searchedToDos.map((toDo, index) => (
									<TodoItem
										key={index}
										text={toDo.text}
										completed={toDo.completed}
										onComplete={() => completeToDo(toDo.text)}
										onDelete={() => deleteToDo(toDo.text)} />
								))
							}
						</TodoList>
					)
				}
			</TodoContext.Consumer>

			<CreateTodoButton />
		</React.Fragment>
	);
}

export default AppUI;