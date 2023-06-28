import styled from 'styled-components'
import { colors } from '../theme'
import { Link } from 'react-router-dom'

export const SectionAbout = styled.section`
  width: 100%;
  padding: 0 20px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-evenly;
    margin: 200px 0;
  }
`
export const AboutTitle = styled.h2`
  color: ${colors.primary};
  font-size: 22px;
  margin-top: 20px;

  @media (min-width: 700px) {
    font-size: 28px;
  }
`
export const SubTitle = styled.h3`
  color: ${colors.third};
  font-weight: bold;
  font-size: 18px;

  @media (min-width: 700px) {
    font-size: 22px;
  }
`
export const AboutParrafo = styled.p`
  font-size: 16px;
  color: ${colors.grey};
  font-weight: 300;
  margin: 30px 0;
  line-height: 25px;

  @media (min-width: 700px) {
    font-size: 18px;
  }
`
export const ImageAbout = styled.div`
  width: 90%;
  height: 300px;
  margin: auto;
  margin-bottom: 20px;

  @media (min-width: 700px) {
    width: 100%;
    height: 500px;
  }

  @media (min-width: 900px) {
    height: 650px;
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-evenly;
    width: 500%;
    height: 500px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// About Page
export const Container = styled.section`
  width: 100%;
`
export const ContainerTitle = styled.section`
  width: 100%;
  height: 235px;
  line-height: 200px;
  font-size: 30px;
  margin: 25px 0;
  padding: 0 20px;

  @media (min-width: 500px) {
    height: 400px;
    line-height: 380px;
    font-size: 40px;
    margin-left: 30px;
  }
`
export const ImgContainer = styled.div`
  position: absolute;
  top: -580px;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(45px 100%, 100% 100%, 100% 92%, 120px 98%);
  background-color: ${colors.primary};
  padding: 0 20px;

  @media (min-width: 500px) {
    top: -400px;
    clip-path: polygon(0 100%, 100% 100%, 100% 86%, 0 98%);
  }

  @media (min-width: 900px) {
    clip-path: polygon(200px 100%, 100% 100%, 100% 80%, 275px 98%);
  }
`
export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  padding: 0 20px;

  @media (min-width: 500px) {
    padding: 30px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 100px;
  }
`
export const TextSubTitle = styled.h2`
  font-size: 22px;
  margin: 20px 0;

  @media (min-width: 500px) {
    font-size: 25px;
  }

  @media (min-width: 900px) {
    font-size: 30px;
  }
`
export const TextParagraph = styled.p`
  font-size: 16px;
  color: rgb(118, 120, 127);
  letter-spacing: 1px;

  @media (min-width: 500px) {
    font-size: 20px;
  }

  @media (min-width: 900px) {
    font-size: 22px;
  }
`
export const AboutImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`
export const DivData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  background-color: #000;
  padding: 20px;

  @media (min-width: 500px) {
    padding: 30px;
  }

  @media (min-width: 900px) {
    padding: 100px;
  }
`
export const TextSubTitle2 = styled.h2`
  font-size: 22px;
  margin: 20px 0;
  color: rgb(41, 81, 213);

  @media (min-width: 500px) {
    font-size: 25px;
  }

  @media (min-width: 900px) {
    font-size: 30px;
  }
`
export const TextParagraph2 = styled.p`
  font-size: 16px;
  color: rgb(118, 120, 127);
  letter-spacing: 1px;

  @media (min-width: 500px) {
    font-size: 20px;
  }

  @media (min-width: 900px) {
    font-size: 22px;
  }
`
export const ButtonLink = styled(Link)`
  display: block;
  background-color: ${colors.white};
  border: 1px solid transparent;
  color: ${colors.third};
  font-weight: 500;
  width: 190px;
  height: 40px;
  text-align: center;
  font-size: 14px;
  line-height: 39px;
  letter-spacing: 1px;
  margin: 15px 0;

  &:hover {
    background-color: transparent;
    border: 1px solid ${colors.third};
  }
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  padding: 20px;

  @media (min-width: 500px) {
    padding: 30px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 100px;
  }
`
export const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`
