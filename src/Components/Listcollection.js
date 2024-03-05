import React from 'react'
import { Button } from '@mui/material';

const Listcollection = ({todos,todos2}) => {
  return (
    <>
    <h2>Udemy</h2>
            <ul>
                {todos.map((todo) => {
                    if (todo.type === 'udemy') {
                        return <li key={todo.id}>
                            <p>{todo.title}</p>
                            <div className='inner'>
                            {`残り${todo.date}日`}
                            <Button variant='outlined'>完了</Button>
                            <Button variant='outlined'  color='warning'>削除</Button>
                            <Button variant='outlined'  color='info'>編集</Button>
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
            
      </>
  )
}

export default Listcollection