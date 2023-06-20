import React from "react";
import { Link } from 'react-router-dom'
import Logo from '../components/common/Logo'
import { Input, Button } from 'antd'

export default function Login() {
  return (
    <div className='grid place-content-center min-h-screen'>
      <div className='w-96 border border-black-2 border-solid rounded-md px-7 py-6 shadow-lg'>
        <div className='w-max mx-auto'>
          <span className='text-black mb-2 text-lg -ml-7 font-medium'>Log in to</span>
          <Logo size="xl" />
        </div>
        <form className='flex flex-col gap-3 mt-5'>
          <Input placeholder='Username' size="large" />
          <Input placeholder='Password' size="large" />
          <Button type="primary" size="large">Log In</Button>
        </form>
        <Link to="/reset-password" className="no-underline text-blue mx-auto block w-max mt-6 hover:opacity-70 duration-150">Forgot Password</Link>
      </div>
    </div>
  )
}
