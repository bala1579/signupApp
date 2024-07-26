import React, { useState , useEffect } from 'react'
import { Link, NavLink  , useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify';





const SignUp = () => {


  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [repassword , setRepassword] = useState('');


  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const {userInfo} = useSelector((state)=>state.auth);

  const [register , { isLoading}] = useRegisterMutation();

  useEffect(()=>
    {
      if (userInfo)
      {
        navigate('/');
      }
    }, [navigate ,userInfo]);

  const submitHandler = async (e) =>
    {
      e.preventDefault();
      if (password !== repassword )
      {
        toast.error('password not match')
      }
      
      else 
      {
        try {
          const res = await register({name , email , password}).unwrap();
          dispatch(setCredentials({ ...res }));
          navigate('/');
          toast.success(" Register succesfully")
          
        } catch (err) {
          toast.error(err?.data?.message || err.error)
        }
      
      }
    }
  




  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up / Create Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={submitHandler}>
          <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder='Enter the Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder='Enter your Email'
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  // type="password"
                  autoComplete="current-password"
                  required
                  placeholder='Enter the password'
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>




            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 Re-Password
                </label>

                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}

              </div>
              <div className="mt-2">
                <input
                  id="repassword"
                  name="repassword"
                  // type="password"
                  // autoComplete="password"
                  
                   autoComplete="current-password"
                  placeholder='Re-Enter the Password'
                  required
                  value={repassword}
                  onChange={(e)=> setRepassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='flex justify-center'>

              {/* <button
                type="submit"
                className="flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 m-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                 <Link to={"/login"}>
              <NavLink  to={"/login"}>  Sign in </NavLink >
                </Link>
              
              </button> */}
              
              <button
                type="submit"
                
                className="flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 m-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

         
        </div>
      </div>
  )
}

export default SignUp;