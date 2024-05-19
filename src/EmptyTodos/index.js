import React from 'react'
import {TodoContext} from '../TodoContext'

function EmptyTodos () {
  const context = React.useContext(TodoContext);
  return(
    <p>{ context.searchValue ? "No se encontro ningun TODO": "Crea tu primer TODO"}</p>
    
  );
}

export { EmptyTodos };