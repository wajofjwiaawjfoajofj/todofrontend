import './App.css';
import About from './Components/About';
import Complete from './Components/Complete';
import Form from './Components/Form';
import List from './Components/List';
import Calendar from './Components/Calendar';
import SideList from './Components/SideList';
import TopBar from './Components/TopBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <TopBar className="TopBar"/>
    <Router>
    <div className="wrapper">
    <div className='leftside'> 
    <SideList/>
    </div>
    <div className='rightside'>
    <Routes>
    <Route path='/' element={<Form/>} />
    <Route path='/list' element={<List/>} />
    <Route path='/complete' element={<Complete/>} />
    <Route path='/calendar' element={<Calendar/>} />
    <Route path='/about' element={<About/>} />
    </Routes>
    </div>
    </div>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
