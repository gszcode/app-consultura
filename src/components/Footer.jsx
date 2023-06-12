import {
  FooterTitle,
  FooterData,
  IconContainer,
  IconItem,
  SectionFooter,
  FooterEmail,
  FooterCopyright,
  Negrita
} from '../StyledComponents/Footer'

const Footer = () => {
  return (
    <SectionFooter>
      <FooterData>
        <FooterTitle>
          Consultora de servicios IT especializada en reclutamiento
        </FooterTitle>
        <IconContainer>
          <IconItem>
            <i className="fa-brands fa-linkedin-in"></i>
          </IconItem>
          <IconItem>
            <i className="fa-brands fa-instagram"></i>
          </IconItem>
          <IconItem>
            <i className="fa-brands fa-facebook"></i>
          </IconItem>
        </IconContainer>
        <FooterEmail>info@busisness-it.com</FooterEmail>
        <FooterCopyright>
          Copyright &copy; 2023 <Negrita>Busisness-IT</Negrita> | Hecho por{' '}
          <Negrita>GSZCODE</Negrita>
        </FooterCopyright>
      </FooterData>
    </SectionFooter>
  )
}

export default Footer
