import styled from 'styled-components'
import PropTypes  from 'prop-types'

const CardWrapper = styled.div`
    position: relative;
    width: 35%;
    height: 80%;
    border-radius: 20px;
    margin-left: 50px;
    background-color: black;
    box-shadow: 5px 5px 15px 5px #000000;
    cursor: pointer;
    overflow: hidden;
`

const CardVisual = styled.img`
    display: flex;
    align-items: start;
    z-index: 2;
    width: 100%;
    object-fit: contain;
`

const CardContainer = styled.div`
    display: flex;
    z-index: 1;
    background-color: black;
    width: 100%;
    height: 100%;
    :hover{

    }
`

const CardTitle = styled.h2`
`

const CardDescription = styled.div`
`

function card({ picture, title, description }) {
    return (
        <CardWrapper>
            <CardVisual src={picture}/>
            <CardContainer>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContainer>
        </CardWrapper>
    )
}

card.propTypes = {
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}

export default card