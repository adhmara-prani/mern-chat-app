import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import MessageContainer from "../../components/Messages/MessageContainer.jsx"

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg bg-indigo-200'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home