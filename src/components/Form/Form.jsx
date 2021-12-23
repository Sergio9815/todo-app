import React from 'react'
import { TodoContext } from '../../context';
import './form.css';

function Form() {
  const { addTodos, textArea, setTextArea, setOpenModal } = React.useContext(TodoContext);

  const onTextAreaChange = (event) => {
    setTextArea(event.target.value)
  }

  const addItem = () => {
    addTodos(textArea);
    setOpenModal(false)
  }

  return (
    <form className='modal__container'>
        <label className='modal__title'>Nueva tarea...</label>
        <textarea  
          className='modal__bar'
          placeholder="..."
          onChange={onTextAreaChange}
        />
        <button 
          type='Button'
          className='modal__btn'
          onClick={addItem}
          >Agregar</button>
    </form>
  )
}

export { Form };
