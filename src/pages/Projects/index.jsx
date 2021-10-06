import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Card from '../../components/Card'
import ProjectsData from '../../content/content.json'

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.primary};
  height: 450px;
  align-items: center;
  justify-content: center;
`


function Projects() {
  const Data = ProjectsData;
  console.log(Data)
  
    return (
        <ProjectsWrapper>
            <Card
                title={Data.title}
            />
        </ProjectsWrapper>
    )
}

export default Projects