import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Navbar } from '@/app/components/Navbar'
import { BiLogoReact } from 'react-icons/bi'

describe('Navbar', () => {
  it('should render an svg as logo', () => {
    const renderEl = render(
      <Navbar.Logo>
        <BiLogoReact size={30} />
      </Navbar.Logo>,
    )

    const logo = renderEl.getByTestId('logo-test')
    const svg = logo.querySelector('svg')

    expect(svg).toBeInTheDocument()
  })

  it('should an item navbar with `Home` text', () => {
    const renderEl = render(<Navbar.Item label="Home" />)
    const navItem = renderEl.getByRole('link', {
      name: /home/i,
    })

    expect(navItem).toBeInTheDocument()
  })

  it('should render three items as content at navbar', () => {
    const renderEl = render(
      <Navbar.Content>
        <Navbar.Item label="Home" />
        <Navbar.Item label="Contato" />
        <Navbar.Item label="Sobre" />
      </Navbar.Content>,
    )

    const navContent = renderEl.getAllByTestId('nav-item-test')

    expect(navContent[0]).toBeInTheDocument()
    expect(navContent[1]).toBeInTheDocument()
    expect(navContent[2]).toBeInTheDocument()
  })
})
