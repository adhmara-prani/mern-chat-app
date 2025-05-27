import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center justify-center gap-2'>
        <input type="text" placeholder='Search' className='input m-3 input-bordered rounded-full'/>
        <button type='submit' className='btn mr-2 btn-circle bg-pink-400 text-white'>
            <IoSearch className='w-5 h-5 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput