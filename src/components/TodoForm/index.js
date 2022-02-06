import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './todoForm.css'

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

  return <form onSubmit={onAdd} className="Form">
      <label className='Form-taskContainer'>
          <span className='Form-title'>Create new task</span>
          <textarea className='Form-input' placeholder='new task' value={newToDoValue} onChange={onChange} />
      </label>
      <div className='Form-buttons'>
          <button className='btnForm' type='button' onClick={onCancel}>Cancel</button>
          <button className='btnForm' type='submit' >Add</button>
      </div>
  </form>;
}

export default TodoForm;
