import React from 'react'
import Message from './Message.jsx'
import MessageSkeleton from '../Skeletons/MessageSkeleton.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'

const Messages = () => {
  const {messages, loading} = useGetMessages();
  console.log("messages:", messages);
  
  return (
    <div className='px-4 flex-1'>
      {!loading && messages.length > 0 && messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}

        {loading && [...Array(2)].map((_, idx) => <MessageSkeleton key={idx} />)}

        {!loading && messages.length === 0 && (
          <p className='text-center text-sky-500 bg-gray-200 rounded-3xl p-1'>Send a message to start the conversation</p>
        )}
    </div>
  )
}

export default Messages