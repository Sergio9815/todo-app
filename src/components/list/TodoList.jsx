import React from 'react';
import './list.css';

function TodoList(props) {
  return (
    <section>
      { props.children }
    </section>
  );
}

export { TodoList };