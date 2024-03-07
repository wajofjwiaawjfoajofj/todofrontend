import React, { useState } from 'react';
import { Button, Input, InputLabel, MenuItem, Select } from '@mui/material';
import { Create } from '../API/api';
// import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  // const [type, setType] = useState('');
  // const [day, setDay] = useState(new Date());

  //usenavigateをインスタンス化
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
  
    try {
      await  Create({
        title,
        // type,
        // day,
        // created: new Date()
      });


      setTitle('');
      // setType('');
      // setDay(new Date());
    } catch (error) {
      console.log(error);
    }
    // navigate('/list')
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
            placeholder='タスクを追加してください　　 (例： paizaAランク獲得)'
            required
            minLength={2}
            fullWidth
          />
          </div>
          {/* <div className='selectwrapper'>
          <InputLabel id='Select'>種類の選択</InputLabel>
          <Select
            id='Select'
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
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
            <MenuItem value='newqrd'>就活</MenuItem>
            <MenuItem value='other'>その他</MenuItem>
          </Select>
          </div>
          <div className='datewrapper'>
            <InputLabel id='date'>期限の設定</InputLabel>
            <Input
              id='date'
              type='date'
              //dateオブジェクトをISO文字列に変換して、日付部分のみ取得
              value={day.toISOString().split('T')[0]}
              //日付に変更があった場合、Dateオブジェクトに変換して保存
              onChange={(e) => setDay(new Date(e.target.value))}
              required
              className='date'
            />
          </div> */}
          <div className='buttonwrapper'>
            <Button 
              type='submit' 
              variant='contained' 
              className='button'
              size='large'
              >
               Todoを追加する
             </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
