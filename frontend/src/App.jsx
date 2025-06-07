import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from "./pages/Login/Login.jsx"
import SignUp from "./pages/Signup/SignUp.jsx"
import Home from "./pages/Home/Home.jsx"
import {Toaster} from "react-hot-toast"
import { useAuthContext } from './context/AuthContext.jsx'

const App = () => {
  const {authUser} = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to={"/signup"} /> } />
        <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login/> } />
        <Route path='/signup' element={authUser ? <Navigate to={"/"} /> : <SignUp/> } />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App