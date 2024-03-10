import React, { useState } from 'react'
import { Button } from '@mui/material';
import { Delete } from '../API/api';
import { Complete } from '../API/api';
import FormEdit from './FormEdit';


const ListcollectionItems = ({todo, onDelete,onComplete }) => {


    const [isEdit,setIsEdit] = useState(false);

    const handleEditClick = () => {
        setIsEdit(true)
    }

    const handleEditCanCel = () => {
        setIsEdit(false)
    }



    const handleDeleteClick = async () => {
        try{
            await Delete(todo.id);
            onDelete(todo.id);
        }
        catch(error){
            console.log(error)
        }
    }

    const handleCompleteClick = async () => {
        try{
            await Complete(todo.id);
            //完了したTodoを削除
            await Delete(todo.id);
            onComplete(todo.id);
        }
        catch(error){
            console.log(error)
        }
    }


  return (
    <div>
        <>
        {!isEdit ?(<li>
             <p>{todo.title}</p>
             <p>{todo.url}</p>
            <div className='inner'>
            {`残り${todo.remaining !== undefined ? todo.remaining : "未定"}日`}
            <Button variant='outlined'  onClick={handleCompleteClick}>完了</Button>
            <Button variant='outlined'  color='warning' onClick={handleDeleteClick}>削除</Button>
            <Button variant='outlined'  color='info' onClick={handleEditClick}>編集</Button>
             </div>
             </li>    )
             : <FormEdit  todo={todo}  onEdit={handleEditCanCel} />}  
      </>
    </div>
  )
}

export default ListcollectionItems