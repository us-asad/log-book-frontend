import React from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"
import LinksWrapper from './LinksWrapper';

export default function SideMenu() {
  return (
    <div className='bg-white flex flex-col gap-1 sticky top-3 shadow-sm border-2 border-solid border-black-2 rounded-xl py-4 px-3'>
      <span className='px-3 pb-3'>Hey John Doe 👋🏻</span>
      {links.map(link => <React.Fragment key={link.label}>
        {link.links ? <LinksWrapper label={link.label} links={link.links} active={link.active} Icon={link.Icon} /> : (
          <Link to={link.link} className={`flex items-center justify-between gap-3 no-underline text-black px-4 py-2 rounded-md hover:bg-blue-2 hover:text-blue duration-150 ${link.active ? "text-blue bg-blue-2" : "text-black-4"}`}>
            <span className='flex gap-3 items-center'>
              <link.Icon />
              <span>{link.label}</span>
            </span>
          </Link>
        )}
      </React.Fragment>)}
    </div>
  )
}

const links = [
  { label: "Drivers", link: "/", Icon: FaUser, active: true },
  { label: "Vehicles", link: "/", Icon: FaUser },
  { label: "Logs", link: "/", Icon: FaUser },
  { label: "Unidentified Events", link: "/", Icon: FaUser },
  { label: "DVIRs", link: "/", Icon: FaUser },
  {
    label: "Reports", link: "/", Icon: FaUser,
    links: [
      { label: "IFTA", link: "/", Icon: FaUser },
      { label: "Idiling", link: "/", Icon: FaUser },
    ]
  },
  {
    label: "Maintenance", link: "/", Icon: FaUser,
    links: [
      { label: "Reminders", link: "/", Icon: FaUser },
      { label: "History", link: "/", Icon: FaUser },
    ]
  },
  {
    label: "Manage", link: "/", Icon: FaUser,
    links: [
      { label: "Drivers", link: "/", Icon: FaUser },
      { label: "Vehicles", link: "/", Icon: FaUser },
      { label: "Groups", link: "/", Icon: FaUser },
      { label: "ELDs", link: "/", Icon: FaUser },
      { label: "GPS Trackers", link: "/", Icon: FaUser },
      { label: "Company", link: "/", Icon: FaUser },
    ]
  },
]
