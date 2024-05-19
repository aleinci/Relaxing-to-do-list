import "./CreateTodoButton.css";
import React from 'react';
import {TodoContext} from '../TodoContext';
import { FaPlus } from "react-icons/fa";

function CreateTodoButton ({setOpenModal}) {
  

  return(
    <button className="CreateTodoButton" onClick={(event)=>{
      setOpenModal(state => !state);
    }}>
      Añadir todo <FaPlus className="icon" />
    </button>
  );
}

export { CreateTodoButton };