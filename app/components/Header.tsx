'use client'

import { useState } from 'react'
import { Navbar } from './Navbar'
import { BiLogoReact } from 'react-icons/bi'

import { RxHamburgerMenu } from 'react-icons/rx'
import Container from './Container'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <Navbar.Root>
        <Navbar.Container>
          <Navbar.Logo>
            <BiLogoReact size={30} />
          </Navbar.Logo>
          <Navbar.Content>
            <Navbar.Item label="Home" />
            <Navbar.Item label="Contato" />
            <Navbar.Item label="Sobre" />
          </Navbar.Content>
          <Navbar.Trigger onClick={() => setToggleMenu(!toggleMenu)} />
        </Navbar.Container>
        <Navbar.MobileContent show={toggleMenu}>
          <Navbar.MobileItem label="Home" />
          <Navbar.MobileItem label="Contato" />
          <Navbar.MobileItem label="Home" />
        </Navbar.MobileContent>
      </Navbar.Root>
    </>
  )
}

export default Header
