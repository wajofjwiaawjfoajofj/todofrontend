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
     <Link to="/" className='Link'> <AddIcon className='muiIcon'  /><p className='sidebarContent'>Add My Tasks</p></Link>
     </li>
     <li className='linkList'>
     <Link to="/list" className='Link'> <FormatListBulletedIcon className='muiIcon' /> <p className='sidebarContent'>onGoing...</p></Link>
     </li>
     <li className='linkList'>
     <Link to="/complete" className='Link'> <LibraryAddCheckIcon  className='muiIcon' /><p className='sidebarContent'>Complete</p></Link>
     </li>
     <li className='linkList'>
     <Link to="/about" className='Link'> <InfoIcon  className='muiIcon' /><p className='sidebarContent'>About this app</p></Link>
     </li>
     <li className='linkList'>
     <Link to="/calendar" className='Link'><CalendarIcon  className='muiIcon' /><p className='sidebarContent'>Calendar（now create）</p></Link>
     </li>
     </ul>
    </>
  )
}

export default SideList