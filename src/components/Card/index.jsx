import styled from 'styled-components'
import PropTypes  from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CardWrapper = styled.div`
    position: relative;
    width: 600px;
    height: 350px;
    background-color: black;
    box-shadow: 5px 5px 15px 5px #000000;
    overflow: hidden;
    @media screen and (max-width: 1200px) {
        width: 500px;
        height: 230px;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media screen and (max-width: 768px) {
        width: 500px;
        height: 230px;
        margin-left: 10px;
        margin-right: 10px;
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
    display: flex;
    flex-direction: column;
    background-color: RGBA(0,0,0,0.87);
    bottom: -85%;
    width: 100%;
    height: 100%;
    transition: transform 2s;
    transform: ${({isOpen}) => isOpen ? "translateY(-85%)" : "translateY(0%)"};
    @media screen and (max-width: 1200px) {
        }
    @media screen and (max-width: 768px) {
        transform: ${({isOpen}) => isOpen ? "translateY(-75%)" : "translateY(0%)"};
        bottom: -75%;
        }
`

const CardTitle = styled.h2`
    display: flex;
    justify-content: space-between;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
`

const ChevronIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`

const CardDescription = styled.p`
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
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
    @media screen and (max-width: 1200px) {
        width: 20px;
        height: 20px;
        border-radius: 10%;
        }
    }
    @media screen and (max-width: 768px) {
        width: 20px;
        height: 20px;
        border-radius: 10%;
        }
  }
`

const Link = styled.a`
    position: absolute;
    display: flex;
    flex-direction: row;
    bottom: 20px;
    padding: 10px;
    text-decoration: none;
    background: black;
    border: 1px solid white;
    border-radius: 6px;
    margin-left: 20px;
    color: white;
    padding-right: 10px;
    align-items: center;
    z-index: 0;
    overflow: hidden;
    cursor: pointer;
    transition: 0.08s ease-in;
    :hover{
        color: black;
    }
    :before{
        content: '';
        position: absolute;
        background: white;
        bottom: 0;
        left: 0;
        top: 0;
        right: 100%;
        z-index: -1;
        transition: right .3s;
    }
    :hover:before{
        right: 0;
    }
    @media screen and (max-width: 1200px) {
        }
    @media screen and (max-width: 768px) {
        font-size: 10px;
        }
`

function Card({ image, title, description, icons, link }) {
    const { t } = useTranslation();
    const [cardContainer, setCardContainer] = useState(false);
    const showCardContainer = () => setCardContainer(!cardContainer)

    return (
            <CardWrapper>
                <CardVisual src={image}/>
                <CardContainer isOpen={cardContainer === true}>
                    <CardTitle>{title}<ChevronIcon onClick={showCardContainer}  icon={cardContainer === true ? ['fas', 'chevron-down'] : ['fas', 'chevron-up']}/></CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <CardIcon>{icons.map((icon, index) => 
                        <Icon key={index} src={icon} alt="icon"/>
                    )}</CardIcon>
                    <Link href={link}>{t("Repository")}</Link>
                </CardContainer>
            </CardWrapper>
    )
}

Card.propTypes = {
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    icons: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired
}

export default Card