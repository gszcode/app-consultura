import { Icono, Navbar, Title } from '../StyledComponents/Navbar'
import { useState } from 'react'

const Header = () => {
  const [icon, setIcon] = useState(false)

  const handleClick = () => {
    setIcon((prev) => !prev)
  }

  return (
    <Navbar>
      <Title>Busisness-GZ</Title>
      <Icono
        onClick={handleClick}
        className={icon ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}
      />
    </Navbar>
  )
}

export default Header
