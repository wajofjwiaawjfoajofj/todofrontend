import React, { useEffect, useState } from 'react'
// import { getComplete } from '../API/api'
import { CompleteDummy } from '../Dummy/dummy'

const Complete =  () => {


  //一旦ダミーデータ使う

  const  [completes, setCompletes] = useState([])

  // useEffect(() => {
  //   const CompleteList = async () => {
  //   try{
  //   const API =  await  getComplete();
  //   setCompletes(API)

  //   }catch(error){
  //     console.log(error)
  //     throw error
  //   }
  // }
  // CompleteList()
  // },[])

  useEffect(() => {
    setCompletes([CompleteDummy])
  },[])




  return (
    <div>
  <h2>完了済みのTodo</h2>
  {completes.map((complete) => (
    <div key={complete.id}>
      {complete.title}
      {complete.type}
      {complete.date}
      {complete.date > 0 ? (
        <span>おめでとう！タスクは無事達成</span>
      ) : (
        <span>残念！タスクの期限を守れませんでした</span>
      )}
    </div>
  ))}
</div>
  )
}

export default Complete