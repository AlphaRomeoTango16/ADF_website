import styled from 'styled-components'
import ReactSwipe from 'react-swipe';
import Card from '../../Card'
import colors from '../../../utils/style/colors'
import projectList from '../projectList';
import { useTranslation } from 'react-i18next'

const MobileCarouselContainer = styled.div`
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  height: 50vh;
`

function MobileCarousel() {
  const { t } = useTranslation();

    return (
        <MobileCarouselContainer>
        <ReactSwipe
          swipeOptions={{ continuous: false }}
        >
        {projectList.map((project, index) => {
            return (
              <div key={index}>
                  <Card
                  key={`${project.title}-${index}`}
                  title={project.title}
                  description={t(project.description)}
                  image={project.image}
                  icons={project.iconsList}
                  link={project.link}
                  />
              </div>
            )
          })}
        </ReactSwipe>
      </MobileCarouselContainer>
    )
}

export default MobileCarousel