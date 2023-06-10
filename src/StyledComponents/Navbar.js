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
  box-shadow: 0px 1px 5px 0px rgba(84, 84, 84, 1);
  box-shadow: 0 0 5px #000;
  z-index: 10;
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
  width: 100%;
  height: 200px;
  position: fixed;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
  box-shadow: 0px 1px 5px 0px rgba(84, 84, 84, 1);
  z-index: 10;
`

export const Item = styled(Link)`
  color: ${colors.white};
  font-weight: 200;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${colors.second};
  }
`
