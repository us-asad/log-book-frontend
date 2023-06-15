import React from 'react'
import { Select, Button } from "antd"

export default function Vehicles() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-medium'>Vehicles</h2>
        <div className='flex items-center gap-2'>
          <Select
            className='w-40'
            defaultValue="auto"
            options={[
              { value: "auto", label: "Auto Refresh Off" },
              { value: "1", label: "1 Minute" },
              { value: "5", label: "5 Minutes" },
              { value: "10", label: "10 Minutes" },
            ]}
        
          />
          <Button>Refresh</Button>
        </div>
      </div>
      <div className='flex gap-2 mt-8'>
        <Select
          className='w-28'
          defaultValue="all"
          options={[
            { value: "all", label: "All Vehicles" },
            { value: "1", label: "0001" },
            { value: "2", label: "001" },
            { value: "3", label: "002" },
          ]}
        />
        <Select
          className='w-28'
          defaultValue="all"
          options={[
            { value: "all", label: "All Drivers" },
            { value: "1", label: "0001" },
            { value: "2", label: "001" },
            { value: "3", label: "002" },
          ]}
        />
        <Select
          className='w-32'
          defaultValue="all"
          options={[
            { value: "all", label: "Sort by Time" },
            { value: "1", label: "0001" },
            { value: "2", label: "001" },
            { value: "3", label: "002" },
          ]}
        />
        <Select
          className='w-28'
          defaultValue="all"
          options={[
            { value: "all", label: "Desc." },
            { value: "1", label: "0001" },
            { value: "2", label: "001" },
            { value: "3", label: "002" },
          ]}
        />
      </div>
      <div className='border border-black-2'>

      </div>
    </div>
  )
}
