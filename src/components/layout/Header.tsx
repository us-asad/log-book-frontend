import React from 'react'
import Logo from '../common/Logo'
import { Select } from "antd";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className='bg-white flex items-center justify-between shadow-sm border-2 border-solid border-black-2 rounded-xl py-4 px-6'>
      <Logo size="lg" />
      <div className='flex items-center gap-4'>
        <Select
          defaultValue="eng"
          className='w-32'
        >
          {langs.map(lang => (
            <Select.Option key={lang.value} value={lang.value}>
              <div className='flex items-center gap-1'>
                <img src={lang.link} className='w-5 h-5' />
                <span>{lang.label}</span>
              </div>
            </Select.Option>
          ))}
        </Select>
        <button className="grid place-content-center">
          <BsFillMoonStarsFill className="text-lg text-black-4" />
        </button>
        <button className="grid place-content-center">
          <FaUserAlt className="text-lg text-black-4" />
        </button>
      </div>
    </header>
  )
}

const langs = [
  { value: "eng", label: "English", link: "https://img.icons8.com/color/48/great-britain.png" },
  { value: "ru", label: "Russia", link: "https://img.icons8.com/external-flat-icons-inmotus-design/48/external-europe-europe-flags-flat-icons-inmotus-design-8.png" },
  {
    value: "uz", label: "Español", link: "https://img.icons8.com/color/48/uzbekistan.png"
  },
]
