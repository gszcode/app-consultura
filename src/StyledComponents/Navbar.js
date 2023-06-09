import styled from 'styled-components'
import { colors } from '../theme'

export const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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
