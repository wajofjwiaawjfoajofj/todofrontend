import React from 'react'
import { Button } from '@mui/material';
import { Delete } from '../API/api';

const ListcollectionItems = ({todo, onDelete}) => {

    const handleDeleteClick = async () => {
        try{
            await Delete(todo.id);
            onDelete(todo.id);
        }
        catch(error){
            console.log(error)
        }
    }


  return (
    <div>
        <>
             <li key={todo.id}>
             <p>{todo.title}</p>
            <div className='inner'>
            {`残り${todo.date}日`}
            <Button variant='outlined'>完了</Button>
            <Button variant='outlined'  color='warning' onClick={handleDeleteClick}>削除</Button>
            <Button variant='outlined'  color='info'>編集</Button>
             </div>
             </li>
             
           
      </>
    </div>
  )
}

export default ListcollectionItems