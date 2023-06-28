import {
  Container,
  ContainerTitle,
  ImgContainer
} from '../StyledComponents/About'
import { Button } from '../StyledComponents/Button'
import { Img, Form, FormContainer, Input } from '../StyledComponents/Contact'

function Contact() {
  return (
    <Container>
      <ContainerTitle>
        <h1>Contacto</h1>
        <ImgContainer />
      </ContainerTitle>
      <FormContainer>
        <h2>Aguardamos tu consulta</h2>
        <p>Te contestaremos a la brevedad</p>
        <Form>
          <Input required placeholder="Nombre*" />
          <Input required placeholder="Apellido*" />
          <Input placeholder="Empresa" />
          <Input required placeholder="Asunto*" />
          <Input required placeholder="Email*" />
          <Input required placeholder="Mensaje*" />
          <Button>ENVIAR</Button>
        </Form>
      </FormContainer>
      <Img src="/image-contact.jpg" alt="Imagen - Nosotros" />
    </Container>
  )
}

export default Contact
