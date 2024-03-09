import React, { useEffect, useState } from 'react'
import GetTodos from '../API/api';
import Listcollection from './Listcollection';
import './List.css';
// import TodoListDummy from '../Dummy/dummy';


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


// ダミーデータ
    // useEffect(() => {
    //     setTodos([...TodoListDummy]);
    // }, []);




    //削除
    const handleDelete = async(todoId) => {
        try{
        setTodos((prev) => prev.filter((todo) => todo.id !== todoId ))
        }
        catch(error){
         console.log(error)
        }
    }

   //コンプリート
   const handleComplete = async (todoId) => {
    try{
        setTodos((prev) => prev.filter((todo) => todo.id !== todoId ))
        }
        catch(error){
         console.log(error)
        }
   }

    return (
        <div className='Listmain'>
            <div className='Listwrapper'>
            <Listcollection  todos={todos}   onTodoDelete={handleDelete} onTodoComplete={handleComplete } /> 
            </div>
        </div>
    );
}

export default List;
