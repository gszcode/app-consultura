import styled from 'styled-components'
import { colors } from '../theme'

export const Section = styled.section`
  width: 100%;
  min-height: 92vh;
  height: 800px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  position: relative;
`
export const ImgContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 100%, 100% 100%, 100% 90%, 0 98%);
  background-color: ${colors.primary};

  @media (min-width: 700px) {
    clip-path: polygon(0 100%, 100% 100%, 100% 80%, 0 98%);
  }
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 30px;

  @media (min-width: 700px) {
    font-size: 40px;
  }

  @media (min-width: 900px) {
    font-size: 53px;
  }

  @media (min-width: 1024px) {
    font-size: 60px;
  }
`
export const SubTitle = styled.h3`
  color: ${colors.third};
  font-weight: bold;
  font-size: 18px;

  @media (min-width: 700px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`
