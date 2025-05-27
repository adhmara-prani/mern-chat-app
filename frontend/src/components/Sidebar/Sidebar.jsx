import React from 'react'
import SearchInput from "./SearchInput.jsx"
import Conversations from './COnversations.jsx'
import LogoutButton from './LogoutButton.jsx'
const Sidebar = () => {
  return (
    <div className='p-4 flex flex-col border-r border-slate-500'>
      <SearchInput/>

      {/* divider */}
      <div className='divider mt-2 divider-info'></div>
      <Conversations/>
      <LogoutButton/>

    </div>
  )
}

export default Sidebar