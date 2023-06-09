import { useState } from 'react'
import {
  Container,
  Icono,
  Item,
  Menu,
  Navbar,
  Title
} from '../StyledComponents/Navbar'

const Header = () => {
  const [icon, setIcon] = useState(false)

  const handleClick = () => {
    setIcon((prev) => !prev)
  }

  return (
    <>
      <Container>
        <Navbar>
          <Title>Busisness-GZ</Title>
          <Icono
            onClick={handleClick}
            className={icon ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}
          />
        </Navbar>
      </Container>
      {icon && (
        <Menu>
          <Item to="/">Home</Item>
          <Item to="/about">Nosotros</Item>
          <Item to="/hiring">Contratación</Item>
          <Item to="/contact">Contacto</Item>
        </Menu>
      )}
    </>
  )
}

export default Header
