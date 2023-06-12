import {
  HiringData,
  HiringParrafo,
  Icono,
  SectionHiring,
  TitleHiring
} from '../StyledComponents/Hiring'
import { SubTitle } from '../StyledComponents/Titles'
import { Button } from '../StyledComponents/Button'
import { Container, ContainerItem } from '../StyledComponents/Container'

const Hiring = () => {
  return (
    <SectionHiring>
      <HiringData>
        <Container>
          <SubTitle>Contratación</SubTitle>
          <TitleHiring>Nuestras modalidades</TitleHiring>
          <HiringParrafo>
            Buscamos y seleccionamos a los mejores profesionales del sector IT y
            los conectamos con las empresas que los necesitan. <br />
            <br />
            Cada modalidad de contratación puede ser adaptada a las necesidades
            y requerimientos específicos de cada cliente, lo que asegura un
            servicio personalizado y de calidad. Además, el equipo de
            reclutamiento se encarga de brindar un soporte y seguimiento
            continuo a cada cliente, lo que garantiza su satisfacción y éxito a
            largo plazo.
          </HiringParrafo>
        </Container>
        <Container>
          <ContainerItem>
            <Icono className="fa-solid fa-briefcase"></Icono>
            <TitleHiring>Búsqueda y selección de personal IT</TitleHiring>
            <HiringParrafo>
              Esta modalidad de contratación permite a las empresas contratar
              talentos IT de manera permanente y a largo plazo.
            </HiringParrafo>
          </ContainerItem>
          <ContainerItem>
            <Icono className="fa-sharp fa-solid fa-file-signature"></Icono>
            <TitleHiring>Contratación temporal</TitleHiring>
            <HiringParrafo>
              Con este servicio buscamos reforzar los equipos de trabajo en
              momentos de alta demanda y por un tiempo predeterminado.
            </HiringParrafo>
          </ContainerItem>
          <ContainerItem>
            <Icono className="fa-solid fa-network-wired"></Icono>
            <TitleHiring>Contratación outsourcing</TitleHiring>
            <HiringParrafo>
              Nuestro servicio de outsourcing de IT es una solución integral
              para empresas que buscan externalizar sus procesos de IT.
            </HiringParrafo>
          </ContainerItem>
        </Container>
        <Button>MÁS INFORMACIÓN</Button>
      </HiringData>
    </SectionHiring>
  )
}

export default Hiring
