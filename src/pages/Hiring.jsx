import {
  AboutImage,
  Container,
  ContainerTitle,
  Div,
  DivData,
  DivText,
  ImgContainer,
  TextParagraph,
  TextParagraph2,
  TextSubTitle,
  TextSubTitle2
} from '../StyledComponents/About'
import { Button } from '../StyledComponents/Button'
import {
  ContactData,
  ContactParrafo,
  SectionContact,
  Span,
  TitleContact
} from '../StyledComponents/Contact'
import { ContainerItem, ContainerItems } from '../StyledComponents/Container'
import {
  HiringData,
  HiringParrafo,
  Icono,
  SectionHiring,
  SubTitle,
  TitleHiring
} from '../StyledComponents/Hiring'

function Hiring() {
  return (
    <Container>
      <ContainerTitle>
        <h1>Contratación</h1>
        <ImgContainer />
      </ContainerTitle>
      <DivText>
        <div>
          <TextSubTitle>Nuestras modalidades</TextSubTitle>
          <TextParagraph>
            Buscamos y seleccionamos a los mejores profesionales del sector IT y
            los conectamos con las empresas que los necesitan. <br />
            <br /> Cada modalidad de contratación puede ser adaptada a las
            necesidades y requerimientos específicos de cada cliente, lo que
            asegura un servicio personalizado y de calidad. Además, el equipo de
            reclutamiento se encarga de brindar un soporte y seguimiento
            continuo a cada cliente, lo que garantiza su satisfacción y éxito a
            largo plazo.
          </TextParagraph>
        </div>
        <AboutImage src="/image-hiring.png" alt="Imagen - Nosotros" />
      </DivText>

      <SectionHiring>
        <HiringData>
          <Container>
            <SubTitle>Búsqueda y selección de personal IT</SubTitle>
            <HiringParrafo>
              Beneficios: La modalidad de contratación permanente les permite a
              las empresas contratar talentos de IT de manera permanente y a
              largo plazo. Esto asegura una estabilidad en la fuerza laboral y
              una continuidad en la ejecución de proyectos. Nuestro team de
              reclutamiento se encarga de buscar y seleccionar el mejor talento
              de IT para cubrir la posición, ahorrando tiempo y recursos a la
              empresa. <br />
              <br />
              Su retorno de inversión de esta modalidad se mide en el aumento de
              la productividad y eficiencia de la empresa gracias a la
              contratación de talentos de IT altamente calificados. Además, se
              espera una disminución en los costos de reclutamiento y selección
              de personal, al ser responsabilidad de nuestro equipo de
              reclutamiento.
            </HiringParrafo>
          </Container>
          <ContainerItems>
            <ContainerItem>
              <Icono className="fa-solid fa-briefcase"></Icono>
              <TitleHiring>Resultados a corto plazo</TitleHiring>
              <HiringParrafo>
                Su empresa podrá cubrir las necesidades de talento para el
                proyecto en cuestión de manera eficiente y sin necesidad de
                aumentar su plantilla laboral.
              </HiringParrafo>
            </ContainerItem>
            <ContainerItem>
              <Icono className="fa-sharp fa-solid fa-file-signature"></Icono>
              <TitleHiring>Resultados a mediano plazo</TitleHiring>
              <HiringParrafo>
                Su empresa podrá llevar a cabo proyectos con una mayor calidad y
                rapidez, lo que contribuirá a su reputación y posicionamiento en
                el mercado.
              </HiringParrafo>
            </ContainerItem>
            <ContainerItem>
              <Icono className="fa-solid fa-network-wired"></Icono>
              <TitleHiring>Resultados a largo plazo</TitleHiring>
              <HiringParrafo>
                Su empresa podrá contar con una mayor capacidad de respuesta
                ante proyectos y temporadas de alta demanda, lo que contribuirá
                a su crecimiento y éxito a largo plazo.
              </HiringParrafo>
            </ContainerItem>
          </ContainerItems>
        </HiringData>
      </SectionHiring>

      <Div>
        <div>
          <TextSubTitle2>Contratación temporal</TextSubTitle2>
          <TextParagraph2>
            Con este servicio buscamos reforzar los equipos de trabajo en
            momentos de alta demanda y por un tiempo predeterminado <br />
            <br />
            Beneficios: La modalidad de contratación temporal permite a las
            empresas contratar talentos de IT por un periodo determinado de
            tiempo, lo que es ideal para proyectos específicos o temporadas de
            alta demanda. Nuestro equipo de reclutamiento se encarga de reclutar
            y seleccionar el mejor talento de IT para el proyecto en cuestión,
            ahorrando tiempo y recursos a la empresa.
            <br />
            <br />
            El retorno de inversión de esta modalidad se mide en la eficiencia y
            rapidez en la ejecución de proyectos, al contar con talentos de IT
            altamente calificados por un tiempo determinado. Además, se espera
            una disminución en los costos de contratación y selección de
            personal, al ser responsabilidad de nuestro equipo de reclutamiento.
          </TextParagraph2>
        </div>
      </Div>

      <DivData>
        <TextSubTitle2>Contratación outsourcing</TextSubTitle2>
        <TextParagraph2>
          Nuestro servicio de outsourcing de IT es una solución integral para
          empresas que buscan externalizar sus procesos de IT para mejorar la
          eficiencia, reducir costos y acceder a talentos especializados. Con
          nuestro enfoque personalizado y orientado a la mejora constante,
          nuestros clientes pueden estar seguros de que sus necesidades de IT
          están en buenas manos.
          <br />
          <br />
          Beneficios: La modalidad de contratación de outsourcing permite a las
          empresas externalizar funciones específicas de su equipo de IT, lo que
          les permite ahorrar costos y recursos, al tiempo que reciben un
          servicio de calidad. El equipo de reclutamiento se encarga de reclutar
          y seleccionar el mejor talento de IT para la función específica,
          ahorrando tiempo y recursos a la empresa.
          <br />
          <br />
          El retorno de inversión de esta modalidad se mide en la disminución de
          costos en la contratación y la selección de personal, así como en la
          reducción de los costos operativos y de infraestructura, al
          externalizar funciones específicas de IT. Además, se espera un aumento
          en la eficiencia y calidad del servicio al contar con un talento
          altamente calificado para la función en cuestión. vanguardia.
        </TextParagraph2>
      </DivData>

      <SectionContact>
        <ContactData>
          <Container>
            <Icono className="fa-solid fa-star"></Icono>
            <Icono className="fa-solid fa-star"></Icono>
            <Icono className="fa-solid fa-star"></Icono>
            <Icono className="fa-solid fa-star"></Icono>
            <Icono className="fa-solid fa-star"></Icono>
          </Container>
          <TitleContact>Nosotros nos encargamos</TitleContact>
          <ContactParrafo>
            Si buscas una empresa de servicios IT que trabaje incansablemente
            para cumplir tus expectativas y objetivos, no busques más allá de{' '}
            <Span>Busisness-IT</Span>.
          </ContactParrafo>
          <Button to="/contact">CONTACTANOS</Button>
        </ContactData>
      </SectionContact>
    </Container>
  )
}

export default Hiring
