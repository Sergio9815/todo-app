import React from 'react'
import { TodoContext } from '../context';
import { TodoCounter } from '../components/counter/TodoCounter';
import { TodoSearch } from '../components/search/TodoSearch';
import { TodoList } from '../components/list/TodoList';
import { TodoItem } from '../components/list/TodoItem';
import { CreateButton } from '../components/button/CreateButton';


function AppUI() {
  const {
    error,
    loading,
    newItems,
    onComplete,
    onDelete,
    theme,
  } = React.useContext(TodoContext);

  return (
    <main className={`${theme ? 'darkTheme' : 'lightTheme'}`}>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {error && <p>Hubo un error...</p>}
            {loading && <p>Cargando...</p>}
            {!loading && !newItems.lenght && <p>Crea tu primer todo...</p>}

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
      <CreateButton /> 
    </main>
  )
}

export { AppUI };
