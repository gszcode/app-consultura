import styled from 'styled-components'

export const Container = styled.div``
export const ContainerItems = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`
export const ContainerItem = styled.div`
  @media (min-width: 1024px) {
    padding: 10px;
  }
`
