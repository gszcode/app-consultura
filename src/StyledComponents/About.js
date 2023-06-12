import styled from 'styled-components'
import { colors } from '../theme'

export const SectionAbout = styled.section`
  width: 100%;
  padding: 0 20px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const AboutTitle = styled.h2`
  color: ${colors.primary};
  font-size: 22px;
  margin-top: 20px;
`
export const AboutParrafo = styled.p`
  font-size: 16px;
  color: ${colors.grey};
  font-weight: 300;
  margin: 30px 0;
  line-height: 25px;
`
export const ImageAbout = styled.div`
  width: 90%;
  height: 300px;
  margin: auto;
  margin-bottom: 20px;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
