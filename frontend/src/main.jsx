import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store.js'
import {Provider} from 'react-redux'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import PrivateProfile from './components/PrivateProfile.jsx'
import UpdateProfile from './components/UpdateProfile.jsx'






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* <Route path = '' element={<Home />}/> */}
    
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path='' element={<PrivateProfile />}>

    <Route path='/profile' element={<Profile/>}/>
    <Route path='/profile/update' element={<UpdateProfile/>}/>
    
    </Route>

    </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>

  <React.StrictMode>
    <RouterProvider router={router} >
    
    </RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
  </Provider>
)
