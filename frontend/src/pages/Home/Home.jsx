import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import MessageContainer from "../../components/Messages/MessageContainer.jsx"

const Home = () => {
  return (
    <div className='flex max-sm:h-[450px] sm:h-[550px] overflow-hidden rounded-lg bg-indigo-200'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home