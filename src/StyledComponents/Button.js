import styled from 'styled-components'
import { colors } from '../theme'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  display: block;
  background-color: ${colors.primary};
  border: 1px solid transparent;
  color: ${colors.white};
  font-weight: 500;
  width: 165px;
  height: 40px;
  text-align: center;
  font-size: 14px;
  line-height: 39px;
  letter-spacing: 1px;

  &:hover {
    background-color: transparent;
    color: ${colors.third};
    border: 1px solid ${colors.third};
  }
`
export const IconBtn = styled.i`
  color: ${colors.third};
  font-size: 12px;
  margin-left: 4px;
`
