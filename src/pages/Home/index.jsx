import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 450px;
`

const HomeContainer = styled.div`
  margin: 70px;
  background-color: ${colors.background};
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 1200px;
`

function Home() {
    return (
        <HomeWrapper>
            <HomeContainer>
                BIENVENUE
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home