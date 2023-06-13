import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../theme'

export const SectionError = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 700px;
  font-weight: bold;
  font-size: 24px;
`
export const LinkError = styled(Link)`
  border-bottom: 1px solid ${colors.primary};
  font-size: 16px;
  font-weight: 700;
  color: ${colors.primary};

  &:hover {
    color: ${colors.second};
    border-bottom: 1px solid ${colors.second};
  }
`
