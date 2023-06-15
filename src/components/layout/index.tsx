import React from 'react'
import Header from '../../components/layout/Header'
import MainWrapper from '../../components/layout/MainWrapper'
import SideMenu from './side-menu';
import { useLocation } from "react-router-dom";
import publicPages from "../../constants/public-pages"

export default function Layout({ children }: { children: React.ReactNode }) {
	const location = useLocation();

  if (publicPages.includes(location.pathname)) return children;

  return (
    <div>
      <div className='p-3 pb-0'>
        <Header />
      </div>
      <div className='p-3 flex gap-3'>
        <div className='w-80'>
          <SideMenu />
        </div>
        <MainWrapper>{children}</MainWrapper>
      </div>
    </div>
  )
}
