import React, { createContext, useState } from 'react'
import useLocalStorage from './useLocalStorage';


const TodoContext = createContext()

function TodoProvider(props) {
    const { item: ToDos, saveItem: saveToDos, loading, error } = useLocalStorage('TO_DOS_V1', []);
	const [searchValue, setSearchValue] = useState('');

	const completedToDos = ToDos.filter((to_do) => to_do.completed === true).length;
	const totalToDos = ToDos.length;



	let searchedToDos = []; // here, save the to-dos filtered

	if (!searchValue.length >= 1) {
		searchedToDos = ToDos;
	} else {
		searchedToDos = ToDos.filter((to_do) => {
			const to_doText = to_do.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return to_doText.includes(searchText);
		});
	}


	const completeToDo = (text) => {
		const toDoIndex = ToDos.findIndex((to_do) => to_do.text === text);
		const newToDos = [...ToDos];
		newToDos[toDoIndex].completed = true;
		saveToDos(newToDos);
	};

	const deleteToDo = (text) => {
		const toToIndex = ToDos.findIndex((to_do) => to_do.text === text);
		const newToDos = [...ToDos];
		newToDos.splice(toToIndex, 1);
		saveToDos(newToDos);
	};

    return (
        <TodoContext.Provider value={{
            totalToDos,
			completedToDos,
			searchedToDos,
			searchValue,
			setSearchValue,
			completeToDo,
			deleteToDo,
			error,
			loading,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };