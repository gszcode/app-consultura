import { useEffect, useState } from 'react'
import {
  Container,
  Icono,
  Item,
  ItemLg,
  Menu,
  MenuLg,
  Navbar,
  Title
} from '../StyledComponents/Navbar'

const Header = () => {
  const [icon, setIcon] = useState(false)
  const [hiddenLink, setHiddenLink] = useState('')

  useEffect(() => {
    if (hiddenLink === 'hidden') {
      setHiddenLink('')
      setIcon(false)
    }
  }, [hiddenLink])

  const handleClick = () => {
    setIcon((prev) => !prev)
  }

  const clickLink = () => {
    setHiddenLink('hidden')
  }

  return (
    <>
      <Container>
        <Navbar>
          <Title>Busisness-IT</Title>
          <Icono
            onClick={handleClick}
            className={icon ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}
          />
          <MenuLg>
            <ItemLg onClick={clickLink} to="/">
              Home
            </ItemLg>
            <ItemLg onClick={clickLink} to="/about">
              Nosotros
            </ItemLg>
            <ItemLg onClick={clickLink} to="/hiring">
              Contratación
            </ItemLg>
            <ItemLg onClick={clickLink} to="/contact">
              Contacto
            </ItemLg>
          </MenuLg>
        </Navbar>
      </Container>
      {icon && (
        <Menu className={hiddenLink}>
          <Item onClick={clickLink} to="/">
            Home
          </Item>
          <Item onClick={clickLink} to="/about">
            Nosotros
          </Item>
          <Item onClick={clickLink} to="/hiring">
            Contratación
          </Item>
          <Item onClick={clickLink} to="/contact">
            Contacto
          </Item>
        </Menu>
      )}
    </>
  )
}

export default Header
