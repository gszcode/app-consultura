import styled from 'styled-components'
import { colors } from '../theme'

export const Section = styled.section`
  width: 100%;
  height: 750px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`
export const ImgContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 100%, 100% 100%, 100% 90%, 0 98%);
  background-color: ${colors.primary};
`
