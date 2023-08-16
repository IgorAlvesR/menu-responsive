'use client'

interface MobileItemProps {
  label: string
}

const MobileItem: React.FC<MobileItemProps> = ({ label }) => {
  return (
    <li className="w-full cursor-pointer px-12 py-4  text-center font-semibold transition hover:bg-zinc-700">
      {label}
    </li>
  )
}

export default MobileItem
