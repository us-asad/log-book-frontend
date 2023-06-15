import React from 'react'
import Header from '../../components/layout/Header'
import MainWrapper from '../../components/layout/MainWrapper'
import SideMenu from '../../components/layout/submenu'

export default function Vehicles() {
  return (
    <div>
      <div className='p-3 pb-0'>
        <Header />
      </div>
      <div className='p-3 flex gap-3'>
        <div className='w-80'>
          <SideMenu />
        </div>
        <MainWrapper />
      </div>
    </div>
  )
}
