import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext';

function TodoCounter ({ total, completed }) {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return(
    <h1>
      {total != completedTodos ? 'Has completado ' +completedTodos+ " de " +totalTodos+ " TODO"
      : "Felicidades, has completado todas tus tareas 😄"}
    </h1>
  );
}

export { TodoCounter };