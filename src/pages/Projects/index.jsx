import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Card from '../../components/Card'
import ProjectPicture1 from '../../assets/Project1.png'
import ProjectPicture2 from '../../assets/Project1.png'
import VueIcon from '../../assets/logo/vue.svg'
import HtmlIcon from '../../assets/logo/html.svg'
import CssIcon from '../../assets/logo/css.svg'
import JavascriptIcon from '../../assets/logo/javascript.svg'
import NodeIcon from '../../assets/logo/nodejs.svg'

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.primary};
  height: 450px;
  align-items: center;
  justify-content: center;
`

const projectList = [
  {
      "title": "Groupomania",
      "image": ProjectPicture1,
      "description": "Groupomania is a social media application dedicated to the employees of the company Groupomania.",
      "icons": {
        "VueIcon": VueIcon,
        "HtmlIcon": HtmlIcon,
        "CssIcon" : CssIcon,
        "JavascriptIcon" : JavascriptIcon,
        "NodeIcon": NodeIcon },
      "link": "https://github.com/AlphaRomeoTango16/Groupomania"
  },
  {   
      "title": "Black Jack Fever",
      "image": ProjectPicture2,
      "description": "Black Jack Fever"
  }
]

function Projects() {
  
    return (
        <ProjectsWrapper>
          {projectList.map((project, index) => (
            <Card
            key={`${project.title}-${index}`}
            title={project.title}
            description={project.description}
            picture={project.image}
            // icons={project.icons}
            link={project.link}
            />
          ))}
        </ProjectsWrapper>
    )
}

export default Projects