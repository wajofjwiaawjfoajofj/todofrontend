import React, { useState } from 'react';
import { Button, Input, InputLabel, MenuItem, Select,Chip } from '@mui/material';
import { Create } from '../API/api';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [kind, setKind] = useState('');
  const [day, setDay] = useState('');
  const [url, setUrl] = useState('');

  //usenavigateをインスタンス化
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
 

    console.log(title,kind,url,day)
    console.log(typeof day)
    
    try {
      await  Create({
        title,
        kind,
        day,
        url
      });


      setTitle('');
      setKind('');
      setDay('');
      setUrl('');
    } catch (error) {
      console.log(error);
    }
    navigate('/list')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='wrraper'>
        <div className='taskwrappr'>
         <div  className='labelWrapper'><InputLabel id='title'>Todoの追加</InputLabel><Chip label="必須" color='error' variant="" size="small" /></div>
          <Input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='タスク名を追加してください　　 (例： paizaAランク獲得)'
            required
            minLength={2}
            fullWidth
          />
          </div>
          <div className='taskwrappr'>
          <div  className='labelWrapper'><InputLabel id='url'>URLの追加</InputLabel><Chip label="任意" color='primary' variant="outlined" size="small" /></div>
          <Input
            type='text'
            id='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='参照にしたいURLを追加してください'
            fullWidth
          />
          </div>
          <div className='selectwrapper'>
          <div  className='labelWrapper labelWrapperdate'><InputLabel id='Select'>種類の選択</InputLabel><Chip label="必須" color='error' variant="" size="small" /></div>
          <Select
            id='Select'
            value={kind}
            onChange={(e) => setKind(e.target.value)}
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
            <MenuItem value='hackathon'>ハッカソン</MenuItem>
            <MenuItem value='newqrd'>就活</MenuItem>
            <MenuItem value='other'>その他</MenuItem>
          </Select>
          </div>
          <div className='datewrapper'>
          <div className='labelWrapper'><InputLabel id='date'>期限の設定</InputLabel><Chip label="必須" color='error' variant="" size="small" /></div>
            <Input
              id='date'
              type='date'
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
              className='date'
            />
          </div>
          <div className='buttonwrapper'>
            <Button 
              type='submit' 
              variant='contained' 
              className='button'
              size='large'
              >
               タスクを追加を追加する
             </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
