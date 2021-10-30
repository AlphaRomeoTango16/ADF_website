import ReactSwipe from 'react-swipe';
import Card from '../../components/Card'
import { useTranslation } from 'react-i18next'
import Groupomania from '../../assets/Groupomania.gif'
import VueIcon from '../../assets/logo/vue.svg'
import HtmlIcon from '../../assets/logo/html.svg'
import CssIcon from '../../assets/logo/css.svg'
import JavascriptIcon from '../../assets/logo/javascript.svg'
import NodeIcon from '../../assets/logo/nodejs.svg'

const Carousel = () => {
    const { t } = useTranslation();
  
  const projectList = [
    {
        "title": "Groupomania",
        "image": Groupomania,
        "description": "Groupomania is a social media application dedicated to the employees of the company Groupomania.",
        "iconsList": [VueIcon, HtmlIcon, CssIcon, JavascriptIcon, NodeIcon],
        "link": "https://github.com/AlphaRomeoTango16/Groupomania"
    },
    {
        "title": "Black Jack",
        "image": Groupomania,
        "description": "Groupomania is a social media application dedicated to the employees of the company Groupomania.",
        "iconsList": [VueIcon, HtmlIcon, CssIcon, JavascriptIcon, NodeIcon],
        "link": "https://github.com/AlphaRomeoTango16/Groupomania"
    },
  ]

    return (
        <div>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
        >
        {projectList.map((project, index) => {
            return (
              <div key={index}>
                  <Card
                  key={`${project.title}-${index}`}
                  title={project.title}
                  description={t("Groupomania")}
                  image={project.image}
                  icons={project.iconsList}
                  link={project.link}
                  />
              </div>
            )
          })}
        </ReactSwipe>
      </div>
    )
}

export default Carousel