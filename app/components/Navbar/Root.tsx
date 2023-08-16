'use client'

import { ReactNode } from 'react'
import Container from '../Container'

interface RootProps {
  children: ReactNode
}

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <nav className="bg-zinc-800 text-white shadow">
      <Container>{children}</Container>
    </nav>
  )
}

export default Root
