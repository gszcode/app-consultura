import {
  AboutImage,
  ButtonLink,
  Container,
  ContainerTitle,
  Div,
  DivData,
  DivText,
  Img,
  ImgContainer,
  TextParagraph,
  TextParagraph2,
  TextSubTitle,
  TextSubTitle2
} from '../StyledComponents/About'

function About() {
  return (
    <Container>
      <ContainerTitle>
        <h1>Nosotros</h1>
        <ImgContainer />
      </ContainerTitle>
      <DivText>
        <div>
          <TextSubTitle>Reclutamiento IT de calidad con Busisness</TextSubTitle>
          <TextParagraph>
            Somos una consultora de servicios IT especializada en reclutamiento.
            Estamos comprometidos en brindar soluciones de tecnología de alta
            calidad y un servicio excepcional a nuestros clientes. Nuestro
            equipo de profesionales altamente capacitados y con años de
            experiencia en el sector de la tecnología, tienen una verdadera
            pasión por lo que hacen y esto se refleja en el resultado de cada
            proyecto.
          </TextParagraph>
        </div>
        <AboutImage src="/image-about-02.jpg" alt="Imagen - Nosotros" />
      </DivText>
      <DivData>
        <TextSubTitle2>Soluciones personalizadas</TextSubTitle2>
        <TextParagraph2>
          En Busisness-IT ofrecemos soluciones personalizadas que superan las
          expectativas de nuestros clientes. Nos destacamos por nuestro servicio
          de excelencia y nuestras soluciones innovadoras y tecnológicas de
          vanguardia.
        </TextParagraph2>
        <ButtonLink to="/hiring">CONTRATACIÓN</ButtonLink>
      </DivData>
      <Div>
        <div>
          <TextSubTitle2>
            Ética, pasión y resultados excepcionales en Busisness
          </TextSubTitle2>
          <TextParagraph2>
            Somos una consultora de servicios IT especializada en reclutamiento.
            Estamos comprometidos en brindar soluciones de tecnología de alta
            calidad y un servicio excepcional a nuestros clientes. Nuestro
            equipo de profesionales altamente capacitados y con años de
            experiencia en el sector de la tecnología, tienen una verdadera
            pasión por lo que hacen y esto se refleja en el resultado de cada
            proyecto.
          </TextParagraph2>
        </div>
        <Img src="/image-about-03.jpg" alt="Imagen - Nosotros" />
      </Div>
    </Container>
  )
}

export default About
