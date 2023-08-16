'use client'

import { RxHamburgerMenu } from 'react-icons/rx'

interface TriggerProps {
  onClick: () => void
}

const Trigger: React.FC<TriggerProps> = ({ onClick }) => {
  return (
    <RxHamburgerMenu
      onClick={onClick}
      className="block cursor-pointer transition md:hidden"
      size={32}
    />
  )
}

export default Trigger
