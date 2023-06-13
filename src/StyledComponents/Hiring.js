import styled from 'styled-components'
import { colors } from '../theme'

export const SectionHiring = styled.section`
  position: relative;
  height: 1500px;

  @media (min-width: 290px) {
    height: 1800px;
  }

  @media (min-width: 300px) {
    max-height: 1600px;
  }

  @media (min-width: 400px) {
    max-height: 1400px;
  }

  @media (min-width: 540px) {
    max-height: 1200px;
  }

  @media (min-width: 700px) {
    height: 1150px;
  }

  @media (min-width: 1024px) {
    height: 900px;
  }
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

  @media (min-width: 700px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`
export const SubTitle = styled.h3`
  color: ${colors.third};
  font-weight: bold;
  font-size: 18px;

  @media (min-width: 700px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`
export const HiringParrafo = styled.p`
  color: ${colors.grey};
  font-size: 16px;
  font-weight: 300;
  margin: 30px 0;
  line-height: 25px;

  @media (min-width: 700px) {
    font-size: 18px;
  }
`
export const Icono = styled.i`
  color: ${colors.third};
  font-size: 26px;
`
