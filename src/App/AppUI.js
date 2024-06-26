import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';

import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

import {TodoContext} from '../TodoContext';
import React from 'react';

function AppUI() {
  const {loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
        } = React.useContext(TodoContext);

	return (
    <div className="container">
      <div className="box">
        <div>
          <TodoCounter />
          <TodoSearch />
        </div>

        <div className='item-list'>
        
          <TodoList >
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos == 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
              />
            ))}
           
            </TodoList >
        </div>

        <div className='add-btn'>
          <CreateTodoButton setOpenModal={setOpenModal} />
        </div>

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
    </div>
  );
}

export {AppUI};