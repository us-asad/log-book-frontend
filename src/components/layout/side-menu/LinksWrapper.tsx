import { useState, useRef } from 'react'
import { HiChevronDown } from "react-icons/hi";
import LinkItem from './LinkItem';

interface Props {
  label: string,
  Icon: React.FC,
  links?: { label: string, Icon: React.FC, link: string }[],
}

export default function LinksWrapper({ label, Icon, links }: Props) {
  const [opened, setOpened] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => {
    setOpened(prev => !prev)
  }

  return (
    <>
      <button onClick={toggleDropDown} className={`flex items-center justify-between gap-3 no-underline text-black px-4 py-2 rounded-md hover:bg-blue-2 hover:text-blue duration-150 ${links?.some(item => location.pathname === `/portal${item.link}`) ? "text-blue bg-blue-2" : "text-black-4"}`}>
        <span className='flex gap-3 items-center'>
          <Icon />
          <span>{label}</span>
        </span>
        {links && <HiChevronDown className={`text-xl duration-150 ${opened && "rotate-180"}`} />}
      </button>
      <div className='ml-3 duration-150 overflow-hidden' style={{ height: opened ? dropDownRef?.current?.clientHeight + "px" : 0 }}>
        <div ref={dropDownRef}>
          {links?.map((item) => <LinkItem small key={item.label} label={item.label} Icon={item.Icon} link={item.link} />)}
        </div>
      </div>
    </>
  )
}
