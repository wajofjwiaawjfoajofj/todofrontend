import React from 'react'
import { Link } from 'react-router-dom'
import './SideList.css'

const SideList = () => {
  return (
    <>
    <div className='sideBarwrapper'>
     <Link to="/" className='Link'>タスクの追加</Link>
     <Link to="/list" className='Link'>実行中のtodo</Link>
     <Link to="/complete" className='Link'>完了済みのTodo</Link>
     <Link to="/about" className='Link'>このアプリについて</Link>
     </div>
    </>
  )
}

export default SideList