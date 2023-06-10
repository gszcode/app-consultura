import {
  AboutParrafo,
  AboutTitle,
  ContainerAbout,
  Image,
  ImageAbout,
  PageTitle,
  SectionAbout
} from '../StyledComponents/About'
import { Button, IconBtn } from '../StyledComponents/Button'

const About = () => {
  return (
    <SectionAbout>
      <ContainerAbout>
        <PageTitle>Nosotros</PageTitle>
        <AboutTitle>¿Qué es Busisness-GZ?</AboutTitle>
        <AboutParrafo>
          Somos una consultora de servicios IT especializada en reclutamiento.
          Estamos comprometidos en brindar soluciones de tecnología de alta
          calidad y un servicio excepcional a nuestros clientes. Nuestro equipo
          de profesionales altamente capacitados y con años de experiencia en el
          sector de la tecnología, tienen una verdadera pasión por lo que hacen
          y esto se refleja en el resultado de cada proyecto.
        </AboutParrafo>
      </ContainerAbout>
      <ImageAbout>
        <Image src="/image-about.jpg" />
      </ImageAbout>
      <Button>
        CONOCER MÁS <IconBtn className="fa-solid fa-arrow-down" />
      </Button>
    </SectionAbout>
  )
}

export default About
