import styled from 'styled-components'
import ReactSwipe from 'react-swipe';
import Card from '../../Card'
import colors from '../../../utils/style/colors'
import projectList from '../projectList';

const MobileCarouselContainer = styled.div`
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  height: 50vh;
`

function MobileCarousel() {
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
                  description={project.description}
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