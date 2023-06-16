import React, { useMemo } from 'react'

export default function Logo({ size }: { size: string }) {
  const fontSize = useMemo(() => {
    switch (size) {
      case "sm":
        return "text-xl"
      case "lg":
        return "text-3xl";
      case "xl":
        return "text-4xl";
      default:
        return "text-2xl"
    }
  }, [size])

  return (
    <div className={`flex gap-2 font-poppins font-bold ${fontSize}`}>
      <span className='-rotate-6 block text-blue'>LOG</span>
      <span>BooK</span>
    </div>
  )
}
