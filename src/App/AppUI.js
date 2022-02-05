import React, { useContext } from 'react';
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateTodoButton from "../components/CreateTodoButton";
import { TodoContext } from '../components/TodoContext';
import Modal from '../components/Modal';
import TodoForm from '../components/TodoForm';


function AppUI() {
	const { error, loading, searchedToDos, completeToDo, deleteToDo, openModal } = useContext(TodoContext)

	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
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
							onDelete={() => deleteToDo(toDo.text)}
						/>
					))
				}
			</TodoList>
			{openModal && (
				<Modal>
					<TodoForm />
					<CreateTodoButton />
				</Modal>
			)}
			<CreateTodoButton />
		</React.Fragment>
	);
}

export default AppUI;