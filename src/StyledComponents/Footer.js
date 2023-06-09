import styled from 'styled-components'
import { colors } from '../theme'

export const SectionFooter = styled.footer`
  height: 400px;
  margin-top: 30px;
  position: relative;

  @media (min-width: 1024px) {
    height: 500px;
  }
`
export const FooterData = styled.footer`
  background-color: #26262c;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0px 100%, 100% 100%, 100% 10%, 0px 0);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  color: ${colors.second};
  font-weight: 900;
  margin: 20px 0;
  font-size: 20px;

  @media (min-width: 700px) {
    font-size: 24px;
  }
`
export const FooterTitle = styled.h3`
  color: ${colors.white};
  font-size: 16px;
  text-align: center;
  font-weight: 200;

  @media (min-width: 1024px) {
    width: 400px;
    font-size: 20px;
  }
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`
export const IconItem = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: ${colors.third};
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.third};
  }

  @media (min-width: 700px) {
    width: 36px;
    height: 36px;
  }

  @media (min-width: 1024px) {
    width: 38px;
    height: 38px;
  }
`
export const FooterEmail = styled.p`
  font-weight: 700;
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    color: ${colors.third};
  }
`
export const FooterCopyright = styled.p`
  font-weight: 200;
  color: ${colors.white};
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
`
export const Negrita = styled.span`
  font-weight: 700;
  letter-spacing: 1px;
`
