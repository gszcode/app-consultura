import styled from 'styled-components'
import { colors } from '../theme'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: relative;
  height: 70px;
`

export const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
`
export const Title = styled.h1`
  color: ${colors.second};
  font-family: 'Kalam', cursive;
`
export const Icono = styled.i`
  color: ${colors.white};
  cursor: pointer;
  font-size: 25px;

  &:hover {
    color: ${colors.second};
  }
`
export const Menu = styled.ul`
  height: 200px;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
`

export const Item = styled(Link)`
  color: ${colors.white};
  font-weight: 400;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    color: ${colors.second};
  }
`
