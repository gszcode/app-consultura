import {
  AboutParrafo,
  AboutTitle,
  SubTitle,
  Image,
  ImageAbout,
  SectionAbout
} from '../StyledComponents/About'
import { Button } from '../StyledComponents/Button'
import { Container } from '../StyledComponents/Container'

const About = () => {
  return (
    <SectionAbout>
      <Container>
        <SubTitle>Nosotros</SubTitle>
        <AboutTitle>¿Qué es Busisness-IT?</AboutTitle>
        <AboutParrafo>
          Somos una consultora de servicios IT especializada en reclutamiento.
          Estamos comprometidos en brindar soluciones de tecnología de alta
          calidad y un servicio excepcional a nuestros clientes. Nuestro equipo
          de profesionales altamente capacitados y con años de experiencia en el
          sector de la tecnología, tienen una verdadera pasión por lo que hacen
          y esto se refleja en el resultado de cada proyecto.
        </AboutParrafo>
        <Button>CONOCER MÁS</Button>
      </Container>
      <ImageAbout>
        <Image src="/image-about.jpg" />
      </ImageAbout>
    </SectionAbout>
  )
}

export default About
