import React from 'react'

const Conversation = () => {
  return <>
  <div className='flex gap-2 items-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer'>
    <div className='avatar online'>
        <div className='w-12 rounded-full'>
            <img src="https://avatar.iran.liara.run/public/girl?username=v3lma" alt="user avatar" />
        </div>
    </div>
    
    <div className='flex flex-col flex-1'>
      <div className='flex gap-3 justify-between'>
        <p className='font-bold text-gray-800'>Velma</p>
        <span className='text-x1 text-emerald-600'>Online</span>
      </div>
    </div>
  </div>

  <div className='divider my-0 py-0 h-1'/>
  </>
}

export default Conversation