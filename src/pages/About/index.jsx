import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ProfilPicture from '../../assets/ProfilPicture.PNG'
import ReactLogo from '../../assets/logo/react.svg'
import VueLogo from '../../assets/logo/vue.svg'
import SassLogo from '../../assets/logo/sass.svg'
import HtmlLogo from '../../assets/logo/html.svg'
import CssLogo from '../../assets/logo/css.svg'
import JsLogo from '../../assets/logo/javascript.svg'
import NodeLogo from '../../assets/logo/nodejs.svg'
import BootstrapLogo from '../../assets/logo/bootstrap.svg'
import GitLogo from '../../assets/logo/Git.svg'
import VSLogo from '../../assets/logo/VSC.svg'
import MongoDBLogo from '../../assets/logo/mongoDB.svg'
import MySQLLogo from '../../assets/logo/MySQL.svg'
import ExpressJsLogo from '../../assets/logo/expressjs.svg'
import NodemonLogo from '../../assets/logo/nodemon.svg'
import SequelizeLogo from '../../assets/logo/sequelize.svg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  height: 60vh;
  @media screen and (max-width: 1200px) {
    height: 100%;
    align-items: start;
}
@media screen and (max-width: 768px) {
    align-items: start;
    height: 100%;
}
`

const AboutContainer = styled.div`
display: flex;
margin: 70px;
width: 1200px;
background-color: transparent;
color: black;
font-size: 50px;
font-family: 'Avenir', Helvetica, sans-serif;
font-weight: bold;
justify-content: center;
@media screen and (max-width: 1200px) {
    flex-direction: row;
    width: 100%;
    margin: 30px 0px 30px 0px;
    padding: 0px 20px 0px 20px;
  }
@media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    align-items: center;
    margin: 30px 0px 30px 0px;
    padding: 0px 20px 0px 20px;
}
`

const PictureContainer = styled.img`
    height: 300px;
    border-radius: 100%;
    @media screen and (max-width: 1200px) {
        width: 350px;
        height: 350px;
        margin-right: 20px;
    }
    @media screen and (max-width: 768px) {
        width: 150px;
        height: 150px;
        margin-top: 20px;
  }
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        padding: 0;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
  }
`

const AboutTitle = styled.h2`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 25px;
    margin: 0px;
    color: ${colors.secondary};
    @media screen and (max-width: 1200px) {
        font-size: 19px;
    }
    @media screen and (max-width: 768px) {
        font-size: 19px;
  }
`

const AboutText = styled.p`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 100;
    font-size: 15px;
    margin: 10px 0px 0px 0px;
    color: ${colors.secondary};
`

const TechnicalTitle = styled.h2`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 25px;
    margin: 20px 0px 0px 0px;
    color: ${colors.secondary};
    @media screen and (max-width: 1200px) {
        font-size: 19px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 768px) {
        font-size: 19px;
        margin-bottom: 20px;
  }
`

const StackWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    
}
@media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
}
`

const StackContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 260px;
    height: 200px;
    margin-right: 30px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        margin-right: 0px;
        transition: height 1s ease-out;
        height: ${({isOpen}) => isOpen ? "150px" : "60px"};
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-right: 0px;
        transition: height 1s ease-out;
        height: ${({isOpen}) => isOpen ? "200px" : "60px"};
    }
`

const StackTitle = styled.h3`
    display: flex;
    justify-content: space-between;
    background-color: ${({isOpen}) => isOpen ? "white" : "transparent"};
    color: ${({isOpen}) => isOpen ? "black" : "white"};
    border: 1px solid grey;
    border-bottom: none;
    padding: 10px;
    margin-bottom: 0;
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 20px;
    width: 260px;
    cursor: pointer;
    :hover {
        background: white;
        color: black;
    }
    @media screen and (max-width: 1200px) {
        width: 93%;
        margin-top: 0;
    }
    @media screen and (max-width: 768px) {
        width: 93%;
        margin-top: 0;
    }
`

const IconContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 200px;
    width: 290px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        height: 75px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 200px;
    }
`

const StackIcon = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    padding: 10px 10px 0px 10px;
    width: 260px;
    border: 1px solid grey;
    height: 120px;
    border-top: none;
    transition: transform 1s;
    transform: ${({isOpen}) => isOpen ? "translateY(0px)" : "translateY(-130px)"};
    @media screen and (max-width: 1200px) {
        width: 93%;
        height: 50px;
        padding: 10px 10px 10px 10px;
        transform: ${({isOpen}) => isOpen ? "translateY(0px)" : "translateY(-70px)"};
    }
    @media screen and (max-width: 768px) {
        width: 93%;
        height: 120px;
    }
`

const ChevronIcon = styled(FontAwesomeIcon)`
    transition: transform 1s;
    transform: ${({isOpen}) => isOpen ? "rotate(0deg)" : "rotate(-180deg)"};
`

const LogoTool = styled.img`
    height: 30px;
    width: 30px;
    padding: 10px;
    border-radius: 10%;
    margin-right: 10px;
    background-color: ${colors.secondary};
    cursor: pointer;
    :hover{
        background-color: #757575;
        filter: grayscale(100%) blur(1px);
    }
    @media screen and (max-width: 1200px) {
        height: 30px;
        width: 30px;
    }
    @media screen and (max-width: 768px) {
        height: 30px;
        width: 30px;
  }
`

function About() {
    const { t } = useTranslation();

    const [frontIcon, setFrontIcon] = useState(true);
    const showFrontIcon = () => setFrontIcon(!frontIcon)

    const [backIcon, setBackIcon] = useState(true);
    const showBackIcon = () => setBackIcon(!backIcon)

    const [toolsIcon, setToolsIcon] = useState(true);
    const showToolsIcon = () => setToolsIcon(!toolsIcon)


    return (
        <div>
        <Helmet>
            <title>| {t("About")}</title>
        </Helmet>
        <AboutWrapper>
            <AboutContainer>
                <PictureContainer src={ProfilPicture} />
                <DescriptionContainer>
                    <AboutTitle>{t("PresentationTitle")}</AboutTitle>
                    <AboutText>{t("PresentationText")}</AboutText>
                    <TechnicalTitle>{t("TechnicalStack")}</TechnicalTitle>
                        <StackWrapper>
                            <StackContainer isOpen={frontIcon === true}>
                                <StackTitle onClick={showFrontIcon} isOpen={frontIcon === true}>Frontend<ChevronIcon isOpen={frontIcon === true} icon={['fas', 'chevron-up']}/></StackTitle>
                                <IconContainer>
                                    <StackIcon isOpen={frontIcon === true}>
                                        <a href="https://developer.mozilla.org/fr/docs/Web/HTML"><LogoTool src={HtmlLogo} title="HMTL5"/></a>
                                        <a href="https://developer.mozilla.org/fr/docs/Web/CSS"><LogoTool src={CssLogo} title="CSS3"/></a>
                                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript"><LogoTool src={JsLogo} title="Javascript"/></a>
                                        <a href="https://reactjs.org/"><LogoTool src={ReactLogo} title="ReactJs"/></a>
                                        <a href="https://vuejs.org/"><LogoTool src={VueLogo} title="VueJs"/></a>
                                        <a href="https://sass-lang.com/"><LogoTool src={SassLogo} title="Sass"/></a>
                                        <a href="https://getbootstrap.com/"><LogoTool src={BootstrapLogo} title="Bootstrap"/></a>
                                    </StackIcon>
                                </IconContainer>
                            </StackContainer>
                            <StackContainer isOpen={backIcon === true}>
                                <StackTitle onClick={showBackIcon} isOpen={backIcon === true}>Backend<ChevronIcon isOpen={backIcon === true} icon={['fas', 'chevron-up']}/></StackTitle>
                                <IconContainer>
                                    <StackIcon isOpen={backIcon === true}>
                                        <a href="https://nodejs.org/en/"><LogoTool src={NodeLogo} title="NodeJs"/></a>
                                        <a href="https://expressjs.com/fr/"><LogoTool src={ExpressJsLogo} title="ExpressJs"/></a>
                                        <a href="https://www.npmjs.com/package/nodemon"><LogoTool src={NodemonLogo} title="Nodemon"/></a>
                                        <a href="https://sequelize.org/"><LogoTool src={SequelizeLogo} title="Sequelize"/></a>
                                        <a href="https://www.mongodb.com/fr-fr"><LogoTool src={MongoDBLogo} title="MongoDB"/></a>
                                        <a href="https://www.mysql.com/fr/"><LogoTool src={MySQLLogo} title="MySQL"/></a>
                                    </StackIcon>
                                </IconContainer>
                                </StackContainer>
                            <StackContainer isOpen={toolsIcon === true}>
                                <StackTitle onClick={showToolsIcon} isOpen={toolsIcon === true}>{t("Tools")}<ChevronIcon isOpen={toolsIcon === true} icon={['fas', 'chevron-up']}/></StackTitle>
                                <IconContainer>
                                    <StackIcon isOpen={toolsIcon === true}>
                                        <a href="https://git-scm.com/"><LogoTool src={GitLogo} title="Git"/></a>
                                        <a href="https://code.visualstudio.com/"><LogoTool src={VSLogo} title="Visual Studio Code"/></a>
                                    </StackIcon>
                                </IconContainer>
                            </StackContainer>
                        </StackWrapper>
                </DescriptionContainer>
            </AboutContainer>
        </AboutWrapper>
        </div>
    )
}

export default About