import "./CreateTodoButton.css";
import React from 'react';
import {TodoContext} from '../TodoContext';

function CreateTodoButton ({setOpenModal}) {
  

  return(
    <button className="CreateTodoButton" onClick={(event)=>{
      setOpenModal(state => !state);
    }}>
      Insertar ➕
    </button>
  );
}

export { CreateTodoButton };