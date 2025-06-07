import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import toast from 'react-hot-toast'
import useConversation from '../../zustand/useConversation.js'
import useGetConversations from '../../hooks/useGetConversations.js'

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be atleast 3 characters long!");
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
      setSelectedConversation(conversation)
      setSearch('');
    }
    else {
      toast.error("No such user found!")
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center gap-2'>
        <input type="text" placeholder='Search' className='input m-3 input-bordered rounded-full' 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit' className='btn mr-2 btn-circle bg-pink-400 text-white'>
            <IoSearch className='w-5 h-5 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput