import styled from 'styled-components'
import { colors } from '../theme'

export const SectionContact = styled.section`
  height: 400px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    height: 500px;
  }
`
export const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TitleContact = styled.h2`
  font-weight: bold;
  font-size: 22px;
  margin: 10px 0;
  text-align: center;

  @media (min-width: 900px) {
    font-size: 28px;
  }
`
export const Icono = styled.i`
  color: ${colors.third};
  font-size: 20px;
`
export const ContactParrafo = styled.p`
  color: ${colors.grey};
  font-size: 16px;
  font-weight: 300;
  margin: 15px 0 30px 0;
  line-height: 25px;

  @media (min-width: 900px) {
    width: 65%;
    font-size: 18px;
    text-align: center;
  }
`
export const Span = styled.span`
  font-weight: bold;
  font-size: 18px;
`
