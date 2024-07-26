import React from 'react'
import {Link , NavLink, useNavigate} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'

const Profile = () => {

  const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userInfo} = useSelector((state)=> state.auth);


  return (
    <div className='h-80 max-w-md   mt-10 m-auto p-10 border-sky-200 border-4'> 
    <h1 className=' text-orange-800 font-bold text-center'>Your Profile Details </h1>
        <h2 className='text-green-950 font-bold text-center'>ID : {userInfo._id}</h2>
      <h2 className='text-green-950 font-bold text-center'>Name : {userInfo.name}</h2>
      <h2 className='text-green-950 font-bold text-center'>Email : {userInfo.email}</h2>
      
    </div>
  )
}

export default Profile