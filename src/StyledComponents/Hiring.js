import styled from 'styled-components'
import { colors } from '../theme'

export const SectionHiring = styled.section`
  position: relative;
  height: 1800px;
`
export const HiringData = styled.div`
  background-color: #26262c;
  padding: 100px 20px 40px 20px;
  position: absolute;
  top: 20px;
  left: 0;
  clip-path: polygon(0px 100%, 100% 100%, 100% 0px, 0px 3%);
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
export const TitleHiring = styled.h2`
  font-weight: bold;
  font-size: 22px;
  margin: 10px 0;
  color: ${colors.white};
`
export const HiringParrafo = styled.p`
  color: ${colors.grey};
  font-size: 16px;
  font-weight: 300;
  margin: 30px 0;
  line-height: 25px;
`
export const Icono = styled.i`
  color: ${colors.third};
  font-size: 26px;
`
