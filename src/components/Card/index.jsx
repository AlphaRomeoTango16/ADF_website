import styled from 'styled-components'
import PropTypes  from 'prop-types'

const Link = styled.a`
    display: block;
    width: 50%;
    height: 80%;
    margin: 30px;
    text-decoration: none;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 20px;
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
    flex-direction: column;
    z-index: 1;
    background-color: black;
    width: 100%;
    height: 100%;
    :hover{

    }
`

const CardTitle = styled.h2`
    color: white;
    padding-left: 20px;
`

const CardDescription = styled.p`
    color: white;
    padding-left: 20px;
`

const CardIcon = styled.div`

`

const Icons = styled.img`
`

function card({ image, title, description, icons, link }) {
    return (
        <Link href={link}>
            <CardWrapper>
                <CardVisual src={image}/>
                <CardContainer>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <CardIcon>
                        <Icons>{icons}</Icons>
                    </CardIcon>
                </CardContainer>
            </CardWrapper>
        </Link>
    )
}

card.propTypes = {
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    icons: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default card