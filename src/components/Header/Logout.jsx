import React from 'react'
import {login, logout} from '../../feature/authSlice'
import authService from '../../appwrite/authService'
import { useDispatch } from 'react-redux'

function Logout() {
  const dispatch = useDispatch();
  const logoutHandler = ()=>{
      authService.logout().then(dispatch(logout()));
  }
  return (
    <button onClick={logoutHandler} className='inline-block text-white w-fit text-[8px] font-Inter font-medium sm:font-medium bg-red-500 py-1 px-1.5  duration-200 hover:bg-red-400 sm:rounded-lg rounded-md sm:text-sm '>
    Logout
   </button>
  )
}

export default Logout
