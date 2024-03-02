import React, { useEffect, useState } from 'react'
import { GetTodos } from '../api';

const List = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const TodoList = async () => {
            try{
                const getFromAPI = await GetTodos();
                setTodos(getFromAPI);
            }
            catch(error){
                console.log('エラーが発生しました', error)
            }
        }
        TodoList();
    },[])



  return (
    <div>
        <h1>Todoリスト</h1>
        <ul>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
        ))}
        </ul>
    </div>
  )
}

export default List
