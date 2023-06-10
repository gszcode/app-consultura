import {
  ImgContainer,
  Section,
  SubTitle,
  TitleBanner
} from '../StyledComponents/Banner'
import { Button, IconBtn } from '../StyledComponents/Button'

const Banner = () => {
  return (
    <Section>
      <SubTitle>You make the request, we make the connection</SubTitle>
      <TitleBanner>
        Somos una consultora de servicios IT especializada en reclutamiento
      </TitleBanner>
      <Button>
        SABER MÁS <IconBtn className="fa-solid fa-arrow-down" />
      </Button>
      <ImgContainer />
    </Section>
  )
}

export default Banner
