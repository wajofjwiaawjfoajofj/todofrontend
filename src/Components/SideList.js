import React from 'react'
import { Link } from 'react-router-dom'

const SideList = () => {
  return (
    <>
     <Link to="/">タスクの追加</Link>
     <Link to="/list">実行中のtodo</Link>
     <Link to="/complete">完了済みのTodo</Link>
     <Link to="/about">このアプリについて</Link>
    </>
  )
}

export default SideList