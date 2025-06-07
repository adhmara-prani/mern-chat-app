import React, { useEffect } from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation.js';

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col overflow-y-auto'>
    {!selectedConversation ? (<NoChatSelected/>) : (
          <>
            <div className=' bg-slate-500 px-4 py-2 mb-2'>
              {/* Header */}
                <span className='label-text mr-2'>To:</span>
                <span className='font-semibold'>{selectedConversation.fullName}</span>
            </div>
            
              {/*Messages */}
              <Messages/>

              {/*Input */}
              <MessageInput/>
          </>
  )}
  </div>
  )
}

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-2xl text-gray-800 flex font-semibold flex-col items-center gap-2'>
        <p>Welcome Velma</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl flex items-center' />
      </div>
    </div>
  )
}

export default MessageContainer