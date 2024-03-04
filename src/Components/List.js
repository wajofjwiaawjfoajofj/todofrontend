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
import { Button } from '@mui/material';
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
            <h2>Udemy</h2>
            <ul>
                {todos.map((todo) => {
                    if (todo.type === 'udemy') {
                        return <li key={todo.id}>
                            <p>{todo.title}</p>
                            <div className='inner'>
                            {`残り${todo.date}日`}
                            <Button variant='outlined'>完了</Button>
                            <Button  variant='outlined'  color='warning'>削除</Button>
                            <Button   variant='outlined'  color='info'>編集</Button>
                            </div>
                            </li>;
                    } else {
                        return null;
                    }
                })}
            </ul>
            <h2>Paiza</h2>
            <ul>
                {todos2.map((todo) => {
                    if (todo.type === 'paiza') {
                        return <li key={todo.id}>
                        <p>{todo.title}</p>
                        <div className='inner'>
                        {`残り${todo.date}日`}
                        <Button variant='outlined'>完了</Button>
                        <Button  variant='outlined'  color='warning'>削除</Button>
                        <Button   variant='outlined'  color='info'>編集</Button>
                        </div>
                        </li>;
                    } else {
                        return null;
                    }
                })}
            </ul>
            </div>
        </div>
    );
}

export default List;
