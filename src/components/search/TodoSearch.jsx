import React from 'react';
import './search.css';
import logo from './search-solid.svg';

function TodoSearch() {
  return (
    <form>
      <img src={logo} alt='logo'></img>
      <input placeholder="Buscar tarea..."/>
    </form>
  );
}

export { TodoSearch };