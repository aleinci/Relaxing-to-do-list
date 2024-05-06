import React from 'react';
import './TodoForm.css';

import {TodoContext, addTodo} from '../TodoContext';

function TodoForm(){

	const {setOpenModal, addTodo} = React.useContext(TodoContext);

	const [newTodoValue, setNewTodoValue] = React.useState('');

	const onSubmit = (event) =>{
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	}

	const onCancel = (event) =>{
		setOpenModal(false);
	}

	const onChange = (event) =>{
		setNewTodoValue(event.target.value);
	}

	return(
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea
				value={newTodoValue}
				onChange={onChange}
				placeholder="hacer mi app"
			/>

			<div className="TodoForm-buttonContainer">
				<button
					type="button"
					onClick={onCancel}
					className="TodoForm-button TodoForm-button--cancel"
				>Cancelar</button>

				<button
					className="TodoForm-button TodoForm-button--add"
				>Agregar</button>
			</div>
		</form>
	);
}

export {TodoForm};