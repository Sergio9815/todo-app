import React from 'react'
import { TodoContext } from '../context';
import { TodoCounter } from '../components/counter/TodoCounter';
import { TodoSearch } from '../components/search/TodoSearch';
import { TodoList } from '../components/list/TodoList';
import { TodoItem } from '../components/list/TodoItem';
import { CreateButton } from '../components/button/CreateButton';
import { Form } from '../components/Form/Form';
import { Modal } from '../Modal';

import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

function AppUI() {
  let color = "#ff8ba7";

  const {
    error,
    loading,
    newItems,
    onComplete,
    onDelete,
    theme,
    openModal, 
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <main className={`${theme ? 'darkTheme' : 'lightTheme'}`}>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {error && 
              <div className="sweet-loading">
                <p>Ooops Hubo un error! 😕</p>
              </div>
            }

            {loading && 
              <div className="sweet-loading">
                <MoonLoader color={color} loading={loading} margin={2} css={override} size={60} />
              </div>
            }

            {!loading && !newItems.length && 
              <div className="sweet-loading">
                <p>Crea tu primer todo! 🙂</p>
              </div>
            }
            
            {newItems.map(todo =>(
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => onComplete(todo.text, todo.completed)}
                onDelete={() => onDelete(todo.text)}
              />
            ))}
          </TodoList>

          {openModal && (
            <Modal >
              <Form />
            </Modal>
          )}
      <CreateButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
        /> 
    </main>
  )
}

export { AppUI };
