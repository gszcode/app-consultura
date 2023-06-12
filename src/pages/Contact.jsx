import {
  ContactData,
  ContactParrafo,
  SectionContact,
  Span,
  TitleContact
} from '../StyledComponents/Contact'
import { Container } from '../StyledComponents/Container'
import { Icono } from '../StyledComponents/Contact'
import { Button } from '../StyledComponents/Button'

const Contact = () => {
  return (
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
          Si buscas una empresa de servicios IT que trabaje incansablemente para
          cumplir tus expectativas y objetivos, no busques más allá de{' '}
          <Span>Busisness-IT</Span>.
        </ContactParrafo>
        <Button>CONTACTANOS</Button>
      </ContactData>
    </SectionContact>
  )
}

export default Contact
