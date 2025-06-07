import React from 'react'

const MessageSkeleton = () => {
  return (
    <>
    <div className="flex w-52 flex-col gap-4 mb-5">
    <div className="skeleton bg-gray-600 h-28 w-full"></div>
    <div className="skeleton bg-gray-600 h-2 w-28"></div>
    <div className="skeleton bg-gray-600 h-2 w-full"></div>
    <div className="skeleton bg-gray-600 h-2 w-full"></div>
    </div>
</>
  )
}

export default MessageSkeleton