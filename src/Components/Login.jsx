// Login.jsx
import React, { useState } from 'react';
import { signInWithEmail } from './authService';
import BackgroundLayout from '../Components/BackgroundLayout';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log(email,password)
    try {
      await signInWithEmail(email, password);
      onLogin();
    } catch (error) {
      console.log(error)
      alert('Invalid email or password');
    }
  };

  return (
    <>
      <BackgroundLayout />
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='bg-white p-8 rounded shadow-md'>
        <center> <h1 className='font-bold italics tracking-wide text-4xl text-center text-white'>
  <span style={{ color: '#ff7e5f' }}>W</span>
  <span style={{ color: '#feb47b' }}>e</span>
  <span style={{ color: '#8ac4d0' }}>a</span>
  <span style={{ color: '#6a85a1' }}>t</span>
  <span style={{ color: '#ff7e5f' }}>h</span>
  <span style={{ color: '#feb47b' }}>e</span>
  <span style={{ color: '#8ac4d0' }}>r</span>
  <span style={{ color: '#6a85a1' }}> </span>
  <span style={{ color: '#ff7e5f' }}>B</span>
  <span style={{ color: '#feb47b' }}>u</span>
  <span style={{ color: '#8ac4d0' }}>d</span>
  <span style={{ color: '#6a85a1' }}>d</span>
  <span style={{ color: '#ff7e5f' }}>y</span>
</h1></center>
            <h2>(Firebase authentication :Demo email- mickey1@gmail.com,Demo password-moratuwa)</h2>
                     
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
                onClick={handleLogin}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
