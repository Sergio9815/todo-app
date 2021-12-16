import React from 'react';
import { TodoCounter } from './components/counter/TodoCounter';
import { TodoSearch } from './components/search/TodoSearch';
import { TodoList } from './components/list/TodoList';
import { TodoItem } from './components/list/TodoItem';
import { CreateButton } from './components/button/CreateButton';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso de React', completed: false },
  { text: 'Sacar al perro de paseo', completed: false },
  { text: 'Sacar al perro de paseo', completed: false },
  { text: 'Sacar al perro de paseo', completed: false },
  { text: 'Sacar al perro de paseo', completed: false },
  { text: 'Sacar al perro de paseo', completed: false },
  { text: 'Sacar al perro de paseo', completed: false },
  { text: 'Sacar al perro de paseo', completed: false },
  { text: 'Sacar al perro de paseo', completed: false },

]

function App() {
  return (
    <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map(todo =>(
            <TodoItem key={todo.text} text={todo.text}/>
          ))}
        </TodoList>
        <CreateButton /> 
    </React.Fragment>
  );
}

export default App;
