import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HomeWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: ${colors.primary};
height: 450px;
align-items: center;
`

const HomeContainer = styled.div`
  margin: 70px;
  max-width: 1200px;
  color: white;
  font-size: 50px;
  font-family: 'Avenir', Helvetica, sans-serif;
  font-weight: bold;
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