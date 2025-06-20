import React from 'react'
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';

const Conversation = ({conversation, lastIndex, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
  <>
  <div className={`flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-400": ""}`} 
  onClick={() => setSelectedConversation(conversation)}>
    <div className={`avatar ${isOnline ? "avatar-online" : ""} `}>
        <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt="user avatar" />
        </div>
    </div>
    
    <div className='flex flex-col flex-1'>
      <div className='flex gap-3 justify-between'>
        <p className='font-bold text-gray-800'>{conversation.fullName}</p>
        <span className='text-xl'>{emoji}</span>
      </div>
    </div>
  </div>

  {!lastIndex && <div className='divider my-0 py-0 h-1.5'/>}
  </>
  )
};

export default Conversation