import React from 'react';
import ListcollectionItems from './ListcollectionItems';

const Listcollection = ({ todos,todos2, onTodoDelete, onTodoComplete }) => {
    const handleDelete = (todoId) => {
      onTodoDelete(todoId);
    };
  
    const handleComplete = (todoId) => {
      onTodoComplete(todoId);
    };

    //ソートを使って残り日数順に並べる
    todos.sort((m,n) => m.date -  n.date)
  
    return (
      <div>
        <h2>Udemy</h2>
        <ul>
     {todos.map((todo) =>
       todo.type === 'udemy' ? (
      <ListcollectionItems
        key={todo.id} 
        todo={todo} 
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
    ) : null
  )}
</ul>
        <h2>Paiza</h2>
        <ul>
          {todos2.map((todo) =>
            todo.type === 'paiza' ? (
              <ListcollectionItems
                key={todo.id} 
                todo={todo} 
                onDelete={handleDelete}
                onComplete={handleComplete}
              />
            ) : null
          )}
        </ul>
      </div>
    );
  };
  

export default Listcollection;
