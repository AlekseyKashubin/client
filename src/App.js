import React from 'react';
import './Movies.css';
import Dashboard from './views/Dashboard';
import New from './views/New';
import Update from './views/Update';
import One from './views/One';
import { Routes, Route, Link } from 'react-router-dom'



function App() {
  return (
    <div className="App">


      <div className='navBar'>
        <h1 className='pageTitle'>Flix-Check</h1>
        <Link className='navLink' to='/'>Dashboard</Link>
        <Link className='navLink' to='/new'>Add a Movie</Link>
      </div>


      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/new' element={<New />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/one/:id' element={<One />}></Route>
      </Routes>
    </div>
  );
}

export default App;
