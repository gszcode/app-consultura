import { LinkError, SectionError } from '../StyledComponents/NotFound'

function NotFound() {
  return (
    <SectionError>
      Página NO encontrada
      <LinkError to="/">Volver al Inicio</LinkError>
    </SectionError>
  )
}

export default NotFound
