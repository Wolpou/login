import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
//Component
import SignIn from './components/SignIn';
import Login from './components/Login';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;