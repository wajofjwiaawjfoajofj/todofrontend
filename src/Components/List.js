// import React, { useEffect, useState } from 'react'
// // import GetTodos from '../API/api';
// import TodoListDummy from '../Dummy/dummy';

// const List = () => {

//     const [todos, setTodos] = useState([]);

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

//     useEffect(() => {
//         const TodoList = async () => {
//             try{
//              const getFromAPI = await TodoListDummy();
//              console.log(getFromAPI)
//              setTodos(getFromAPI);
//               }
//             catch(error){
//           console.log('エラーが発生しました', error)
//          }
//         }
//         TodoList();
//     },[])



//   return (
//     <div>
//         <h1>Todoリスト</h1>
//         <h2>Udemy</h2>
//         <ul>
//         {todos.map((todo) => {
//         if (todo.type === 'udemy') {
//           return <li key={todo.id}>{todo.title}{todo.type}</li>;
//         } else {
//           return null;
//         }
//       })}
//        </ul>
//     </div>
//   )
// }

// export default List






//↓ダミーデータ用


import React, { useEffect, useState } from 'react';
import TodoListDummy from '../Dummy/dummy';
import { TodoListDummy2 } from '../Dummy/dummy';
// import { Button } from '@mui/material';
import Listcollection from './Listcollection';
import './List.css';

const List = () => {

    //ダミーデータ
    const [todos, setTodos] = useState([]);
    const [todos2, setTodo2] = useState([]);



    useEffect(() => {
        setTodos([TodoListDummy]);
    }, []);

    useEffect(() => {
        setTodo2([TodoListDummy2]);
    }, []);




    return (
        <div className='Listmain'>
            <div className='Listwrapper'>
            <Listcollection  todos={todos} todos2={todos2} /> 
            </div>
        </div>
    );
}

export default List;
