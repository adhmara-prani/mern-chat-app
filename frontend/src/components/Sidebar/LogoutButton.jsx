import React from 'react'
import { SlLogout } from "react-icons/sl";
import useLogout from '../../hooks/useLogout.js';

const LogoutButton = () => {
  const {loading, logout} = useLogout();

  return (
    <div className='mt-auto'>
       {!loading ? (
         <SlLogout className='cursor-pointer fill-black size-5' 
        onClick={logout}/>
       ) : (
        <span className='loading loading-spinner'></span>
       )}
    </div>
  )
}

export default LogoutButton