import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Card from '../../components/Card'
import ProjectPicture1 from '../../assets/Project1.png'
import VueIcon from '../../assets/logo/vue.svg'
import HtmlIcon from '../../assets/logo/html.svg'
import CssIcon from '../../assets/logo/css.svg'
import JavascriptIcon from '../../assets/logo/javascript.svg'
import NodeIcon from '../../assets/logo/nodejs.svg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
// import { icons } from 'react-icons'

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.primary};
  height: 60vh;
  align-items: center;
  justify-content: center;
`

const projectList = [
  {
      "title": "Groupomania",
      "image": ProjectPicture1,
      "description": "Groupomania is a social media application dedicated to the employees of the company Groupomania.",
      "iconsList": [VueIcon, HtmlIcon, CssIcon, JavascriptIcon, NodeIcon],
        // "1": VueIcon,
        // "2": HtmlIcon,
        // "3" : CssIcon,
        // "4" : JavascriptIcon,
        // "5": NodeIcon },
      "link": "https://github.com/AlphaRomeoTango16/Groupomania"
  },
]

function Projects() {
  const { t } = useTranslation();
  
    return (
      <div>
        <Helmet>
          <title>| {t("Projects")}</title>
        </Helmet>
        <ProjectsWrapper>
          {projectList.map((project, index) => (
            <Card
            key={`${project.title}-${index}`}
            title={project.title}
            description={project.description}
            image={project.image}
            // icons={project.iconsList.map((iconsList) =>(
            //   iconsList
            // ))}
            // icons={project.icons}
            link={project.link}
            />
          ))}
        </ProjectsWrapper>
      </div>
    )
}

export default Projects