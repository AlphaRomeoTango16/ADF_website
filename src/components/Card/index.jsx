import styled from 'styled-components'
import PropTypes  from 'prop-types'

const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80%;
    margin: 30px;
    text-decoration: none;
`

const CardWrapper = styled.div`
    position: relative;
    width: 600px;
    height: 400px;
    background-color: black;
    box-shadow: 5px 5px 15px 5px #000000;
    cursor: pointer;
    overflow: hidden;
    @media screen and (max-width: 768px) {

    }
    @media screen and (max-width: 768px) {


  }
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
    bottom: -85%;
    width: 100%;
    height: 100%;
    transition: transform 2s;
    :hover {
        transform: translateY(-85%);
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
    display: flex;
    justify-content: flex-start;
    padding: 0 20px;
`

const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
`

function card({ image, title, description, icons, link }) {
    return (
        <Link href={link}>
            <CardWrapper>
                <CardVisual src={image}/>
                <CardContainer>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <CardIcon>{icons.map((icon, index) => 
                        <Icon key={index} src={icon} alt="icon"/>
                    )}</CardIcon>
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