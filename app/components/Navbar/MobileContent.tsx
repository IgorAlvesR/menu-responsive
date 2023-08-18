'use client'

import { ReactNode } from 'react'

interface MobileContentProps {
  children: ReactNode
  show: boolean
}

const MobileContent: React.FC<MobileContentProps> = ({ children, show }) => {
  return (
    <>
      <ul
        data-testid="nav-content-test"
        className={`            
          flex             
          flex-col 
          items-center                        
          gap-8
        text-white 
          transition-all            
          md:hidden
          ${show ? 'h-screen' : 'invisible h-0'}
        `}
      >
        {children}
      </ul>
    </>
  )
}

export default MobileContent
