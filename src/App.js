import './App.css';
import About from './Components/About';
import Complete from './Components/Complete';
import Form from './Components/Form';
import List from './Components/List';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
    <Router>
    <div className="wrapper">
    <div className='leftside'> 
    <Sidebar/>
    </div>
    <div className='rightside'>
    <Routes>
    <Route path='/' element={<Form/>} />
    <Route path='/list' element={<List/>} />
    <Route path='/comolete' element={<Complete/>} />
    <Route path='/about' element={<About/>} />
    </Routes>
    </div>
    </div>
    </Router>
    </>
  );
}

export default App;
