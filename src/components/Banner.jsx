import { ImgContainer, Section } from '../StyledComponents/Banner'
import { Button } from '../StyledComponents/Button'
import { Title, SubTitle } from '../StyledComponents/Banner'

const Banner = () => {
  return (
    <Section>
      <SubTitle>You make the request, we make the connection</SubTitle>
      <Title>
        Somos una consultora de servicios IT especializada en reclutamiento
      </Title>
      <Button>SABER MÁS</Button>
      <ImgContainer />
    </Section>
  )
}

export default Banner
