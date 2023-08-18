'use client'

import { ReactNode } from 'react'

interface LogoProps {
  children: ReactNode
}

const Logo: React.FC<LogoProps> = ({ children }) => {
  return (
    <div data-testid="logo-test" className="cursor-pointer px-2 py-4">
      {children}
    </div>
  )
}

export default Logo
