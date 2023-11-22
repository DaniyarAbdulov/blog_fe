import React from 'react'

interface HeaderProps {
    title?: string;
}
export const Header:React.FC<HeaderProps> = ({title}) => {
  return (
    <div className=' w-full border-red-400 rounded-lg border'>
        Header
    </div>
  )
}
