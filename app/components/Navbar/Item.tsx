'use client'

interface ItemProps {
  label: string
}

const Item: React.FC<ItemProps> = ({ label }) => {
  return (
    <li
      data-testid="nav-item-test"
      className="cursor-pointer px-12  py-4 font-semibold transition hover:bg-zinc-700"
    >
      <a href="#">{label}</a>
    </li>
  )
}

export default Item
