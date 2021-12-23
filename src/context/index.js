import React from 'react'
import { useLocalStorage } from '../hooks';
const TodoContext = React.createContext();

function TodoProvider(props) {
  const [theme, setTheme] = React.useState(false);

  const { 
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed);
  const totalTodos = completedTodos.length;

  const searchFilter = todos.filter(todo => todo.text.toUpperCase().includes(searchValue.toUpperCase()));
  const filterItems = () => searchFilter.length > 0 ? searchFilter : todos;
  const newItems = filterItems();
  
  const onComplete = (text, completed) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = !completed;
    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      newItems,
      onComplete,
      onDelete,
      totalTodos,
      todos,
      searchValue,
      setSearchValue,
      theme, 
      setTheme
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
