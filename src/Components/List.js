import React, { useEffect, useState } from 'react'
import GetTodos from '../API/api';

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
    <h2>Udemy</h2>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
            {todo.title}</li>
      ))}
    </ul>
  </div>
  
  )
}

export default List






// //↓ダミーデータ用


// import React, { useEffect, useState } from 'react';
// import TodoListDummy from '../Dummy/dummy';
// import { TodoListDummy2 } from '../Dummy/dummy';
// // import { Button } from '@mui/material';
// import Listcollection from './Listcollection';
// import './List.css';
// // import GetTodos from '../API/api';



// const List = () => {

//     // //ダミーデータ
//     const [todos, setTodos] = useState([]);
//     const [todos2, setTodo2] = useState([]);


//     // //表示用
//     useEffect(() => {
//         setTodos([...TodoListDummy]);
//     }, []);

//     useEffect(() => {
//         setTodo2([TodoListDummy2]);
//     }, []);

//     // const [todos, setTodos] = useState([]);

//     // useEffect(() => {
//     //     const TodoList = async () => {
//     //         try{
//     //             const getFromAPI = await GetTodos();
//     //             setTodos(getFromAPI);
//     //         }
//     //         catch(error){
//     //             console.log('エラーが発生しました', error)
//     //         }
//     //     }
//     //     TodoList();
//     // },[])



//     //削除
//     const handleDelete = async(todoId) => {
//         try{
//         setTodos((prev) => prev.filter((todo) => todo.id !== todoId ))
//         }
//         catch(error){
//          console.log(error)
//         }
//     }

//    //コンプリート
//    const handleComplete = async (todoId) => {
//     try{
//         setTodos((prev) => prev.filter((todo) => todo.id !== todoId ))
//         }
//         catch(error){
//          console.log(error)
//         }
//    }

//     return (
//         <div className='Listmain'>
//             <div className='Listwrapper'>
//             <Listcollection  todos={todos} todos2={todos2}  onTodoDelete={handleDelete} onTodoComplete={handleComplete } /> 
//             </div>
//         </div>
//     );
// }

// export default List;
