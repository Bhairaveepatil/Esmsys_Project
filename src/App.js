import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Userdetails from './components/Userdetails';
import Error from './components/Error';
import ForgetPassword from './components/ForgetPassword';
import NewSubmit from './components/Otp';

import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userdetails' element={<Userdetails/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/otp' element={<NewSubmit/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </div>
    </>
  )
}

export default App
