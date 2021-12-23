import React from 'react'
import { useLocalStorage } from '../hooks';
const TodoContext = React.createContext();

function TodoProvider(props) {
  const [theme, setTheme] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const { 
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [textArea, setTextArea] = React.useState('');


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

  const addTodos = (content) => {
    const arr = [...todos];
    arr.push({
      text: content,
      completed: false
    })
    saveTodos(arr);
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
      setTheme,
      openModal, 
      setOpenModal,
      addTodos,
      textArea, 
      setTextArea
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
