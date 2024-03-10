import React from 'react'

const CompleteList = ({complete}) => {
  return (
    <li className='list'>
      <div className='taskName'>タスク名:　{complete.title}</div>
      {complete.remaining > 0 ? (
        <span className='success'>おめでとう！タスクは無事達成</span>
      ) : (
        <span className='failed'>残念！タスクの期限を守れませんでした</span>
      )}
      </li>
  )
}

export default CompleteList