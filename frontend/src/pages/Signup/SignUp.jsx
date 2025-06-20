import React, { useState } from 'react'
import signupChat from '../../assets/signupChat.json'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
{/* <Lottie animationData={signupChat} loop={true} /> */}

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    gender:''
  });

  const {loading, signup} = useSignup(); 

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='bg-indigo-200 p-8 rounded-2xl shadow-md w-screen max-w-xl'>
        <h1 className='text-2xl text-black font-semibold text-center'>Get Started With</h1>
        <h1 className='text-2xl text-center font-semibold mb-2 bg-gradient-to-r from-blue-500 to-pink-400 text-transparent bg-clip-text'>ChatMonde!</h1>
        <h3 className='text-center font-semibold text-sm text-black mb-5'>Changing the World, One Useless Chat at a Time 😉</h3>

        <form onSubmit={handleSubmit}>
        <div>
            <label className='label p-2 mt-2'>
              <span className='label-text text-sm text-gray-600'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter full name' required={true} className='w-full input input-bordered h-10' 
            value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
          </div>

          <div>
            <label className='label p-2 mt-2'>
              <span className='label-text text-sm text-gray-600'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' required={true} className='w-full input input-bordered h-10' 
            value={inputs.userName} onChange={(e) => setInputs({...inputs, userName: e.target.value})}/>
          </div>

          <div>
            <label className='label p-2 mt-2'>
              <span className='label-text text-sm text-gray-600'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' required={true} className='w-full input input-bordered h-10' 
            value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
          </div>

          <div>
            <label className='label p-2 mt-2'>
              <span className='label-text text-sm text-gray-600'>Confirm Password</span>
            </label>
            <input type="text" placeholder='Confirm Password' required={true} className='w-full input input-bordered h-10' 
            value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
          </div>

          {/* Gender Checkbox goes here */}
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />

          <Link to={'/login'} className='text-sm text-black hover:underline hover:text-blue-600 mt-5 inline-block'>Already have an account? Login</Link>

          <button className='btn btn-outline btn-primary w-full mt-1'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp