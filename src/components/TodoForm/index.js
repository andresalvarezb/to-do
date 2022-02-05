import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {addToDo, setOpenModal} = useContext(TodoContext);

    const [newToDoValue, setNewToDoValue] = useState('');


    const onCancel = () => {
        setOpenModal(false)
    }
    
    const onChange = (e) => {
        setNewToDoValue(e.target.value)
    }

    const onAdd = (e) => {
        e.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false)
    }

  return <form onSubmit={onAdd}>
      <label>
          <span>Create new task</span>
          <textarea placeholder='new task' value={newToDoValue} onChange={onChange} />
      </label>
      <div>
          <button type='button' onClick={onCancel}>Cancel</button>
          <button type='submit' >Add</button>
      </div>
  </form>;
}

export default TodoForm;
