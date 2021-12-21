import React from 'react';
import { AppUI } from './AppUI';

function App() {
  
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = [];
  }
  else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed)

  const searchFilter = todos.filter(todo => todo.text.toUpperCase().includes(searchValue.toUpperCase()))
  const filterItems = () => searchFilter.length > 0 ? searchFilter : todos
  const newItems = filterItems();

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos);
  }

  const onComplete = (text, completed) => {
    const index = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[index].completed = !completed;
    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    const index = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      completed={completedTodos.length} 
      todos={todos.length}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      newTodos={newItems}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}

export default App;
