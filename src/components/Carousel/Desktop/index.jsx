import styled from 'styled-components'
import Card from '../../Card'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import colors from '../../../utils/style/colors'
import projectList from '../projectList';
import { useTranslation } from 'react-i18next'

const DesktopCarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${colors.primary};
  height: 60vh;
  align-items: center;
`

const SliderLeft = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #515357;
  margin-right: 30px;
  cursor: pointer;
  :hover{
    color: white;
`

const SliderRight = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #515357;
  margin-left: 30px;
  cursor: pointer;
  :hover{
    color: white;
  }
`

function DesktopCarousel() {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);
    const length = projectList.length;
  
    const nextSlide = () => {
      setCurrent(current === length -1 ? 0 : current +1);
    }
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length -1 : current -1);
    }

    return (
        <DesktopCarouselContainer>
            <SliderLeft icon={['fas', 'chevron-circle-left']} onClick={prevSlide}/>
          {projectList.map((project, index) => {
            return (
              <div key={index}>
                {index === current && (
                  <Card
                  key={`${project.title}-${index}`}
                  title={project.title}
                  description={t(project.description)}
                  image={project.image}
                  icons={project.iconsList}
                  link={project.link}
                  />
                )}
              </div>
            )
          })}
          <SliderRight icon={['fas', 'chevron-circle-right']} onClick={nextSlide}/>
        </DesktopCarouselContainer>
    )
}

export default DesktopCarousel