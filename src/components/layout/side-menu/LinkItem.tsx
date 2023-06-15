import React from 'react'
import { Link } from "react-router-dom"

interface Props {
  label: string,
  link: string,
  Icon: React.FC,
  active: boolean | undefined
  small: boolean | undefined,
}

export default function LinkItem({ link, Icon, label, active, small }: Props) {
  return (
    <Link to={link} className={`flex items-center justify-between gap-3 no-underline text-black px-4 py-2 rounded-md hover:bg-blue-2 hover:text-blue duration-150 ${active ? "text-blue bg-blue-2" : "text-black-4"} ${small && "text-sm"}`}>
      <span className='flex gap-3 items-center'>
        <Icon />
        <span>{label}</span>
      </span>
    </Link>
  )
}
