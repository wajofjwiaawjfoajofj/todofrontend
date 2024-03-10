import React from 'react'
import { Update } from '../API/api'
import { useState } from 'react'
import { InputLabel,Input,Select,MenuItem,Button } from '@mui/material'
import './FormEdit.css'


const FormEdit = ({todo, onEdit}) => {

    const id = todo.id
    const [title, setTitle] = useState(todo.title)
    const [kind, setKind] = useState(todo.kind)



 const handleSubmit = async (e) => {

    try{
        const todoData = {
            title,
            kind
        };
        await Update(id, todoData);
        onEdit();
    }
    catch(error){
        console.log(error)
    }
 }


  return (
    <div className='formEditWrapper'>
    <form onSubmit={handleSubmit} className='form'>
        <h3 className='formEditTitle'>編集する</h3>
        <div className='TitleEditWrapper'>
        <InputLabel>タイトルの修正</InputLabel>
      <Input  type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className='SelectEditWrapper'>
      <InputLabel id='Select'>種類の選択</InputLabel>
          <Select
            id='Select'
            value={kind}
            onChange={(e) => setKind(e.target.value)}
            className='select'
          >
            <MenuItem value=''>
              <em>選択してください</em>
            </MenuItem>
            <MenuItem value='paiza'>paiza</MenuItem>
            <MenuItem value='udemy'>Udemy</MenuItem>
            <MenuItem value='study'>参考書</MenuItem>
            <MenuItem value='qualification'>資格</MenuItem>
            <MenuItem value='codetest'>コーディングテスト</MenuItem>
            <MenuItem value='job'>インターン、バイト</MenuItem>
            <MenuItem value='youtube'>Youtube</MenuItem>
            <MenuItem value='dev'>個人開発</MenuItem>
            <MenuItem value='hackathon'>ハッカソン</MenuItem>
            <MenuItem value='newqrd'>就活</MenuItem>
            <MenuItem value='other'>その他</MenuItem>
          </Select>
          </div>
          <Button 
              type='submit' 
              variant='contained' 
              className='button'
              size='large'
              >
               タスクを修正する
             </Button>
    </form>
    </div>
  )
}

export default FormEdit