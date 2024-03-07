import React, { useEffect, useState } from 'react'
// import { getComplete } from '../API/api'
import { CompleteDummy } from '../Dummy/dummy'
import CompleteList from './CompleteList'
import './Complete.css'

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
    setCompletes([...CompleteDummy])
  },[])


  return (
  <div className='completeWrapper'>
    <div className='complete' > 
     <h2>完了済みのTodo</h2>
     <ul className='listcontainer'>
     {completes.map((complete,index) => (
       <CompleteList  key={index}  complete={complete} />
      ))}
      </ul>
    </div>
 </div>
  )
}

export default Complete