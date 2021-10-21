import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Card from '../../components/Card'
import Groupomania from '../../assets/Groupomania.gif'
import VueIcon from '../../assets/logo/vue.svg'
import HtmlIcon from '../../assets/logo/html.svg'
import CssIcon from '../../assets/logo/css.svg'
import JavascriptIcon from '../../assets/logo/javascript.svg'
import NodeIcon from '../../assets/logo/nodejs.svg'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${colors.primary};
  height: 60vh;
  align-items: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const SliderLeft = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #515357;
  margin-right: 30px;
  cursor: pointer;
  :hover{
    color: white;
  }
  @media screen and (max-width: 1200px) {
    font-size: 35px;
    margin-bottom: 30px;
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 30px;
    margin-right: 0;
  }
`

const SliderRight = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #515357;
  margin-left: 30px;
  cursor: pointer;
  :hover{
    color: white;
  }
  @media screen and (max-width: 1200px) {
    font-size: 35px;
    margin-top: 30px;
    margin-left: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 35px;
    margin-top: 30px;
    margin-left: 0;
  }
`

function Projects() {
  const { t } = useTranslation();
  
  const projectList = [
    {
        "title": "Groupomania",
        "image": Groupomania,
        "description": "Groupomania is a social media application dedicated to the employees of the company Groupomania.",
        "iconsList": [VueIcon, HtmlIcon, CssIcon, JavascriptIcon, NodeIcon],
        "link": "https://github.com/AlphaRomeoTango16/Groupomania"
    },
  ]

  const [current, setCurrent] = useState(0);
  const length = projectList.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
  }

    return (
      <div>
        <Helmet>
          <title>| {t("Projects")}</title>
        </Helmet>
        <ProjectsWrapper>
          <SliderLeft icon={['fas', 'chevron-circle-left']} onClick={prevSlide}/>
          {projectList.map((project, index) => {
            return (
              <div key={index}>
                {index === current && (
                  <Card
                  key={`${project.title}-${index}`}
                  title={project.title}
                  description={t("Groupomania")}
                  image={project.image}
                  icons={project.iconsList}
                  link={project.link}
                  />
                )}
              </div>
            )
          })}
          <SliderRight icon={['fas', 'chevron-circle-right']} onClick={nextSlide}/>
        </ProjectsWrapper>
      </div>
    )
}

export default Projects