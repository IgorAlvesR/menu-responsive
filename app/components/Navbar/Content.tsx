'use client'

import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <ul className="hidden gap-8 md:flex">{children}</ul>
}

export default Content
