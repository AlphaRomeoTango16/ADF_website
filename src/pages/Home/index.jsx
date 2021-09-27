import styled from 'styled-components'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 450px;
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