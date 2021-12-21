import React from 'react'
import { TodoCounter } from '../components/counter/TodoCounter';
import { TodoSearch } from '../components/search/TodoSearch';
import { TodoList } from '../components/list/TodoList';
import { TodoItem } from '../components/list/TodoItem';
import { CreateButton } from '../components/button/CreateButton';

function AppUI(props) {
  return (
    <React.Fragment>
      <TodoCounter 
        completed={props.completed} 
        todos={props.todos}
      />
      <TodoSearch 
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      <TodoList>
        {props.newTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => props.onComplete(todo.text, todo.completed)}
            onDelete={() => props.onDelete(todo.text)}
          />
        ))}
      </TodoList>
      <CreateButton /> 
  </React.Fragment>
  )
}

export { AppUI };
