import React, { useState } from 'react';
import { Button, Input, InputLabel, MenuItem, Select } from '@mui/material';
import { Create } from '../API/api';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [day, setDay] = useState('');

  //usenavigateをインスタンス化
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Create({
        title,
        type,
        day
      });

      console.log(title, type, day);

      setTitle('');
      setType('');
      setDay('');
    } catch (error) {
      console.log(error);
    }
    navigate('/list')
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='wrraper'>
        <div className='taskwrappr'>
          <InputLabel id='title'>タスクの追加</InputLabel>
          <Input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='タスクを追加してください'
            required
            minLength={2}
          />
          </div>
          <InputLabel id='Select'>種類の選択</InputLabel>
          <Select
            id='Select'
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <MenuItem value=''>
              <em>選択してください</em>
            </MenuItem>
            <MenuItem value='paiza'>paiza</MenuItem>
            <MenuItem value='udemy'>Udemy</MenuItem>
            <MenuItem value='study'>参考書</MenuItem>
          </Select>
          <div>
            <InputLabel id='date'>期限の設定</InputLabel>
            <Input
              id='date'
              type='date'
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            />
          </div>
          <div>
            <Button type='submit'>Todoを追加する</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
