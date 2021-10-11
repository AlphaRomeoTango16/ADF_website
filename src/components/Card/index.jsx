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
    position: relative;
    width: 89%;
    height: 83%;
    border-radius: 20px;
    background-color: black;
    box-shadow: 5px 5px 15px 5px #000000;
    cursor: pointer;
    overflow: hidden;
`

const CardVisual = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: fill;
`

const CardContainer = styled.div`
    position: absolute;
    background-color: RGBA(0,0,0,0.87);
    bottom: -80%;
    width: 100%;
    height: 100%;
    transition: transform 2s;
    :hover {
        transform: translateY(-80%);
    }
`

const CardTitle = styled.h2`
    color: white;
    padding-left: 20px;
    padding-right: 20px;
`

const CardDescription = styled.p`
    color: white;
    padding-left: 20px;
    padding-right: 20px;
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
    icons: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired
}

export default card