import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginService from '../services/login'
import jobService from '../services/jobs'


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null)
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      })
      window.localStorage.setItem('loggedJobUser', JSON.stringify(user))
      jobService.setToken(user.token)
      setUser(user)
      setPassword('')
      setUsername('')
    } catch (error) {
      console.error(error)
      
    }
  }
  return (
    <div className=' flex flex-col items-center mx-6 md:mx-10 max-w-[1110px] xl:mx-auto py-12 gap-y-4 text-darkgray'>
      <h1 className='font-bold text-voilet text-xl text-center'>LOGIN</h1>
      <form action="" method="post" className='flex flex-col gap-y-6 items-center w-[70%] md:w-[40%] xl:w-[30%] ' name='Login' onSubmit={handleLogin}>
      <label htmlFor="username" className='w-full'>
        <input type="text" name="username" id="username" aria-label="User Name" placeholder='Enter your username' value={username} className='w-full' onChange={(e) => setUsername(e.target.value)}/>
      </label>
      
      <label htmlFor="password" className='w-full '>
        <input type="password" name="password" id="password" aria-label="Password" placeholder='Enter your password here' autoComplete='on' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full'/>
      </label>
      <p>Forget Password?</p>
      <label htmlFor="submitBtn" className='w-full  '>
        <button type="submit" id='submitBtn' className='bg-voilet text-white rounded-xl font-bold px-6 py-2 w-full'>Sign In</button>
      </label>
      <h2>Not A Member Yet?</h2>
      <p>By creating an account with our website, you can take this secret weapon to build out and manage your job searching pipeline.</p>
      <a href="/account/create" className='bg-voiletop10 text-voilet rounded-xl font-bold block w-full px-6 py-2 text-center'>Register</a>
    </form>
    </div>
    
  )
}

export default LoginForm