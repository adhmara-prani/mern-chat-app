import React from 'react'
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
        <form className='px-4 my-3'>
            <div className='divider divider-info'></div>

            <div className='flex gap-1'>
                <input type="text" className='border text-sm rounded-lg w-full p-2.5 bg-slate-500 border-gray-600 text-white' placeholder='Send a message'/>
                <button type='submit'><IoIosSend className='size-5 fill-black cursor-pointer'/></button>
            </div>
        </form>
  )
}

export default MessageInput