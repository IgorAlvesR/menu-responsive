'use client'

import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="flex items-center justify-between">{children}</div>
}

export default Container
