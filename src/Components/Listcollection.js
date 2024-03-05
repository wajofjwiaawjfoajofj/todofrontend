import React from 'react';
import ListcollectionItems from './ListcollectionItems';

const Listcollection = ({ todos, todos2, onTodoDelete }) => {
  const handleDelete = (todoId) => {
    onTodoDelete(todoId);
  };

  return (
    <div>
      <h2>Udemy</h2>
      <ul>
        {todos.map((todo) => {
          if (todo.type === 'udemy') {
            return (
              <ListcollectionItems
                key={todo.id} 
                todo={todo} 
                onDelete={handleDelete}
              />
            );
          } else {
            return null;
          } 
        })}
      </ul>
      <h2>Paiza</h2>
      <ul>
        {todos2.map((todo) => {
          if (todo.type === 'paiza') {
            return (
              <ListcollectionItems
                key={todo.id} 
                todo={todo} 
                onDelete={handleDelete}
              />
            );
          } else {
            return null;
          } 
        })}
      </ul>

    </div>
  );
};

export default Listcollection;
