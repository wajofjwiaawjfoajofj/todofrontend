import React from 'react'
import { Link } from 'react-router-dom'
import './SideList.css'
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import InfoIcon from '@mui/icons-material/Info';
import { CalendarIcon } from '@mui/x-date-pickers';

const SideList = () => {
  return (
    <>
    <ul className='sideBarwrapper'>
     <li className='linkList'>
     <AddIcon className='muiIcon'  />
     <Link to="/" className='Link'>Add My Tasks</Link>
     </li>
     <li className='linkList'>
     <FormatListBulletedIcon className='muiIcon' /> 
     <Link to="/list" className='Link'>onGoing...</Link>
     </li>
     <li className='linkList'>
     <LibraryAddCheckIcon  className='muiIcon' />
     <Link to="/complete" className='Link'>Complete</Link>
     </li>
     <li className='linkList'>
     <InfoIcon  className='muiIcon' />
     <Link to="/about" className='Link'>About this app</Link>
     </li>
     <li className='linkList'>
     <CalendarIcon  className='muiIcon' />
     <Link to="/calendar" className='Link'>Calendar（now create）</Link>
     </li>
     </ul>
    </>
  )
}

export default SideList