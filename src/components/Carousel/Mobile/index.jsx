import styled from 'styled-components'
import ReactSwipe from 'react-swipe';
import Card from '../../Card'
import projectList from '../projectList';

const MobileCarouselContainer = styled.div`
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