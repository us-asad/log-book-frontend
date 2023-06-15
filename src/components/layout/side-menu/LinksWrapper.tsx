import React, { useState, useRef } from 'react'
import { HiChevronDown } from "react-icons/hi";
import LinkItem from './LinkItem';

interface Props {
  label: string,
  Icon: React.FC,
  links?: { label: string, Icon: React.FC, link: string, active?: boolean }[] ,
  active: boolean | undefined,
}

export default function LinksWrapper({ label, Icon, links, active }: Props) {
  const [opened, setOpened] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => {
    setOpened(prev => !prev)
  }

  console.log(opened, "opened");


  return (
    <>
      <button onClick={toggleDropDown} className={`flex items-center justify-between gap-3 no-underline text-black px-4 py-2 rounded-md hover:bg-blue-2 hover:text-blue duration-150 ${active || opened ? "text-blue bg-blue-2" : "text-black-4"}`}>
        <span className='flex gap-3 items-center'>
          <Icon />
          <span>{label}</span>
        </span>
        {links && <HiChevronDown className={`text-xl duration-150 ${opened && "rotate-180"}`} />}
      </button>
      <div className='ml-3 duration-150 overflow-hidden' style={{ height: opened ? dropDownRef?.current?.clientHeight + "px" : 0 }}>
        <div ref={dropDownRef}>
          {links?.map((link) => <LinkItem small key={link.label} label={link.label} Icon={link.Icon} active={link.active} link={link.link} />)}
        </div>
      </div>
    </>
  )
}
