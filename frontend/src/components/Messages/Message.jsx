import React from 'react'
import {useAuthContext} from '../../context/AuthContext.jsx'
import {extractTime} from '../../utils/extractTime.js'
import useConversation from '../../zustand/useConversation.js';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const realTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? 'bg-blue-500' : 'bg-pink-500';

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-7 m-2'>
                <img src={profilePic} alt="chat bubble conversation getter_or_setter" />
            </div>
        </div>

        <div className={`chat-bubble text-white ${bubbleColor} pb-2`}>{message.message}</div>
        <div className='chat-footer opacity-100 text-xs text-black flex gap-1 items-center'>
          {realTime}
        </div>
    </div>
  )
}

export default Message