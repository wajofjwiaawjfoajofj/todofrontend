import React from 'react'

const CompleteList = ({complete}) => {
  return (
    <li className='list'>
      <div>タスクの名前:　{complete.title}</div>
      <div>タスクの種類:　{complete.type}</div>
      {complete.date > 0 ? (
        <span className='success'>おめでとう！タスクは無事達成</span>
      ) : (
        <span className='failed'>残念！タスクの期限を守れませんでした</span>
      )}
      </li>
  )
}

export default CompleteList