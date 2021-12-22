import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../hooks';

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed)

  const searchFilter = todos.filter(todo => todo.text.toUpperCase().includes(searchValue.toUpperCase()))
  const filterItems = () => searchFilter.length > 0 ? searchFilter : todos
  const newItems = filterItems();

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
