import React, { useState } from 'react';
import { AppUI } from "./AppUI";
import './App.css';

const defaultToDos = [{
	"text": "Compensation Analyst",
	"completed": false
}, {
	"text": "Cost Accountant",
	"completed": true
}, {
	"text": "VP Accounting",
	"completed": false
}, {
	"text": "Health Coach IV",
	"completed": true
}, {
	"text": "Research Assistant I",
	"completed": true
}]


function App() {
  // ! LocalStorage
  const localStorageToDos = localStorage.getItem('TO_DOS_V1');
  let parsedToDos;

  if (localStorageToDos) {
    parsedToDos = JSON.parse(localStorageToDos)
  } else {
    localStorage.setItem('TO_DOS_V1', JSON.stringify([]));
    parsedToDos = [];
  }


	const [ToDos, setToDos] = useState(parsedToDos);
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


// bridge between localStorage and the state
const saveToDos = newToDos => {
  const stringifiedToDos = JSON.stringify(newToDos);
  localStorage.setItem('TO_DOS_V1', stringifiedToDos);
  setToDos(newToDos);
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
		<AppUI 
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchedToDos={searchedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
		/>
			
		
	);
}

export default App;
