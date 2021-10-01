import styled from 'styled-components'

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 450px;
`

const ProjectsContainer = styled.div`
  margin: 70px;
  max-width: 1200px;
  color: white;
  font-size: 50px;
  font-family: 'Avenir', Helvetica, sans-serif;
  font-weight: bold;
`

function Projects() {
    return (
        <ProjectsWrapper>
            <ProjectsContainer>
            </ProjectsContainer>
        </ProjectsWrapper>
    )
}

export default Projects