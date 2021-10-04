import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Card from '../../components/Card'

const ProjectsWrapper = styled.div`
  display: flex;
  background-color: ${colors.primary};
  height: 450px;
  align-items: center;
`

const ProjectsContainer = styled.div`
  margin: 30px;
`

function Projects() {
    return (
        <ProjectsWrapper>
            <ProjectsContainer>
              <Card></Card>
              <Card></Card>
            </ProjectsContainer>
        </ProjectsWrapper>
    )
}

export default Projects