import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-row items-center justify-center min-w-96 mx-auto'>
      <div className='bg-indigo-200 p-8 rounded-2xl shadow-md w-screen max-w-xl'>
        <h1 className='text-2xl text-black font-semibold text-center'>Welcome Back to</h1>
        <h1 className='text-2xl text-center font-semibold mb-2 bg-gradient-to-r from-blue-500 to-pink-400 text-transparent bg-clip-text'>ChatMonde!</h1>
        <h3 className='text-center font-semibold text-black mb-5 text-sm'>Enter your email and password to access your account</h3>

        <form>
          <div>
            <label className='label p-2'>
              <span className='label-text text-sm text-gray-600'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2 mt-3'>
              <span className='label-text text-sm text-gray-600'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
          </div>

          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-1 inline-block'>
            {"Don't"} have an account?
          </a>

          <button className='btn btn-outline btn-secondary flex mt-5 w-full'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login
