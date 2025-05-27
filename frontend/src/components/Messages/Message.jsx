import React from 'react'

const Message = () => {
  return (
    <div className='chat-end text-white'>
        <div className='chat-image avatar'>
            <div className='w-7 m-2'>
                <img src="https://avatar.iran.liara.run/public/boy?username=fredaintafred" alt="whatever dawg" />
            </div>
        </div>

        <div className='chat-bubble text-white bg-blue-500'>Hi Velma!</div>
        <div className='chat-footer opacity-50 text-xs text-black flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message