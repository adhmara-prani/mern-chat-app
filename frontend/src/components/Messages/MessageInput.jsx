import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../../hooks/useSendMessage.js';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='divider divider-info'></div>

            <div className='flex gap-1'>
                <input type="text" className='border text-sm rounded-lg w-full p-2.5 bg-slate-500 border-gray-600 text-white' placeholder='Send a message' value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type='submit'>
                  {loading ? <div className='loading loading-dots'></div> : <IoIosSend className='size-5 fill-black cursor-pointer'/>}
                </button>
            </div>
        </form>
  )
}

export default MessageInput