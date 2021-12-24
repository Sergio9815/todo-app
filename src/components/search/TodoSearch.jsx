import React from 'react';
import { TodoContext } from '../../context';
import './search.css';

function TodoSearch() {

  const { searchValue, setSearchValue, setShowList, showList } = React.useContext(TodoContext);

  const showItems = (value) => {
    setShowList(value);
  }

  const onSearchChange = (event) => {
    setSearchValue(event.target.value)
    // console.log(searchValue);
  }

  return (
    <div>
      <div className='todos__options'>
        <button 
          className={`options__btn ${showList === 'all' && 'active'}`}
          onClick={() => showItems('all')}
          >Todos
        </button>
        <button 
          className={`options__btn ${showList === 'complete' && 'active'}`}
          onClick={() => showItems('complete')}
          >Completados
        </button>
        <button 
          className={`options__btn ${showList === 'incomplete' && 'active'}`}
          onClick={() => showItems('incomplete')}
          >Incompletos
        </button>
      </div>
      <form className='search__container'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c7c7c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input  
          className='search__bar'
          placeholder="Buscar tarea..."
          onChange={onSearchChange}
          value={searchValue}
          />
      </form>
    </div>
  );
}

export { TodoSearch };