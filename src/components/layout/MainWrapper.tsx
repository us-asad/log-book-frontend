import React from 'react'

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-white w-[calc(100%-310px)] shadow-sm border-2 border-solid border-black-2 rounded-xl py-4 px-6'>
      {children}
    </div>
  )
}
