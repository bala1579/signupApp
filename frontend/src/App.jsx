import { useState } from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import {ToastContainer} from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'


function App() {
  

  return (
    <>
      
     <Header />
     <ToastContainer />
     <Outlet />

      
    </>
  )
}

export default App
