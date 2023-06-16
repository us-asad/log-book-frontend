import React from "react";
import { Link } from 'react-router-dom'
import Logo from '../components/common/Logo'
import { Input, Button } from 'antd'

export default function ResetPassword() {
  return (
    <div className='grid place-content-center min-h-screen'>
      <div className='w-96'>
        <div className='w-max mx-auto'>
          <span className='text-black mb-2 text-lg -ml-7 font-medium'>Recover Your Password Of</span>
          <Logo size="xl" />
        </div>
        <form className='flex flex-col gap-3 mt-5'>
          <Input placeholder='Email' size="large" />
          <Button type="primary" size="large">Send Mail</Button>
        </form>
        <p className="text-xs text-end text-black-4 mt-3">* You will receive a link reset your password via email.</p>
        <Link to="/login" className="no-underline text-blue mx-auto block w-max mt-2">Back to Login</Link>
      </div>
    </div>
  )
}
