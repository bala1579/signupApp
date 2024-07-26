import React from 'react'
import {Link , NavLink, useNavigate} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { useLoginMutation, useLogoutMutation } from '../slices/userApiSlice'
import { logout } from '../slices/authSlice'
import {toast} from 'react-toastify';

const Header = () => {

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {userInfo} = useSelector((state)=> state.auth);
    const [logoutApiCall] = useLogoutMutation();


    const logoutHandler = async () =>
    {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login')
            toast.success("logout successfuly")
            
        }
         catch (err) 
        {
            toast.error(err?.data?.message || err.error)
        }
    }

  return (
    <div className='w-full justify-center  h-12 p-4  bg-sky-500 font-bold'>


    {userInfo ? (
        <>
        <Link to={""}>
         <ul className='flex justify-evenly '>


         <li>
            <NavLink className="text-green-950 " to={"/profile"} title={userInfo.name} id='username'>Welcome Back  {userInfo.name}-Profile</NavLink>
        </li>

         {/* <li>
            <NavLink className={({isActive}) =>
            `${isActive ? "text-green-950" : "text-white"}`} to={"/profile"} title={userInfo.name} id='username'>Welcome Back  {userInfo.name}-Profile</NavLink>
        </li> */}

        <li>
            <NavLink className={({isActive}) =>
            `${isActive ? "text-green-950" : "text-white"}`} to={"/profile/update"}>UpdateProfile</NavLink>
        </li>

        {/* <li>
            <NavLink className={({isActive}) =>
            `${isActive ? "text-green-950" : "text-white"}`} to={"/logout"} onClick={logoutHandler}>Logout</NavLink>
        </li> */}


<li>
            <NavLink className= "text-white" to={"/logout"} onClick={logoutHandler}>Logout</NavLink>
        </li>

         </ul>
         </Link>
        </>
    ) : (
        
       <> 
       <Link  to={"/"}>
    <ul className='flex justify-evenly '>
        

        <li>
            <NavLink className={({isActive}) =>
            `${isActive ? "text-green-950" : "text-white"}`} to={"/signup"}>SignUp</NavLink>
        </li>

        {/* <li>
            <NavLink className={({isActive}) =>
            `${isActive ? "text-green-950" : "text-white"}`} to={"/login"}>Login</NavLink>
        </li> */}

        <li>
            <NavLink className="text-green-950"  to={"/login"}>Login</NavLink>
        </li>

        
        
        
    </ul> 
    </Link>
     </> )}

    {/* </Link> */}
    
    
    </div>

     )
}

export default Header