import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'
import ProfilPicture from '../../assets/profil.png'
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
import AirtableLogo from '../../assets/logo/airtable.svg'
import AxiosLogo from '../../assets/logo/axios.svg'
import DiagramsLogo from '../../assets/logo/diagrams.svg'
import FigmaLogo from '../../assets/logo/figma.svg'
import FirebaseLogo from '../../assets/logo/firebase.svg'
import GitHubLogo from '../../assets/logo/github.svg'
import GitLabLogo from '../../assets/logo/gitlab.svg'
import I18nextLogo from '../../assets/logo/i18next.svg'
import MapBoxLogo from '../../assets/logo/mapbox.svg'
import MaterialUiLogo from '../../assets/logo/materialui.svg'
import MomentjsLogo from '../../assets/logo/momentjs.svg'
import NetlifyLogo from '../../assets/logo/netlify.svg'
import NextjsLogo from '../../assets/logo/nextjs.svg'
import NotionLogo from '../../assets/logo/notion.svg'
import PostmanLogo from '../../assets/logo/postman.svg'
import ReactHookFormLogo from '../../assets/logo/reacthookform.svg'
import ReduxLogo from '../../assets/logo/redux.svg'
import RetoolLogo from '../../assets/logo/retool.svg'
import TypescriptLogo from '../../assets/logo/typescript.svg'
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

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const PictureContainer = styled.img`
    height: 300px;
    border-radius: 100%;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
	animation: ${gradient} 15s ease infinite;
    @media screen and (max-width: 1200px) {
        width: 350px;
        height: 350px;
        margin-right: 20px;
    }
    @media screen and (max-width: 768px) {
        width: 150px;
        height: 150px;
        margin-top: 20px;
        margin-right: 0px;
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
        transition: height 1s;
        height: ${({isOpen}) => isOpen ? "150px" : "60px"};
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-right: 0px;
        transition: height 1s;
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
    overflow: scroll;
    transform: ${({isOpen}) => isOpen ? "translateY(0px)" : "translateY(-130px)"};
    @media screen and (max-width: 1200px) {
        width: 93%;
        height: 50px;
        padding: 10px 10px 10px 10px;
        transform: ${({isOpen}) => isOpen ? "translateY(0px)" : "translateY(-140px)"};
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

    const [frontIcon, setFrontIcon] = useState(false);
    const showFrontIcon = () => setFrontIcon(!frontIcon)

    const [backIcon, setBackIcon] = useState(false);
    const showBackIcon = () => setBackIcon(!backIcon)

    const [toolsIcon, setToolsIcon] = useState(false);
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
                                        <a href="https://www.typescriptlang.org/"><LogoTool src={TypescriptLogo} title="Typescript"/></a>
                                        <a href="https://nextjs.org/"><LogoTool src={NextjsLogo} title="NextJs"/></a>
                                        <a href="https://vuejs.org/"><LogoTool src={VueLogo} title="VueJs"/></a>
                                        <a href="https://redux.js.org/"><LogoTool src={ReduxLogo} title="Redux"/></a>
                                        <a href="https://sass-lang.com/"><LogoTool src={SassLogo} title="Sass"/></a>
                                        <a href="https://getbootstrap.com/"><LogoTool src={BootstrapLogo} title="Bootstrap"/></a>
                                        <a href="https://mui.com/"><LogoTool src={MaterialUiLogo} title="Material-Ui"/></a>
                                        <a href="https://www.mapbox.com/"><LogoTool src={MapBoxLogo} title="MapBox"/></a>
                                        <a href="https://momentjs.com/"><LogoTool src={MomentjsLogo} title="Moment"/></a>
                                        <a href="https://www.i18next.com/"><LogoTool src={I18nextLogo} title="i18next"/></a>
                                        <a href="https://react-hook-form.com/"><LogoTool src={ReactHookFormLogo} title="React-Hoo-Form"/></a>
                                    </StackIcon>
                                </IconContainer>
                            </StackContainer>
                            <StackContainer isOpen={backIcon === true}>
                                <StackTitle onClick={showBackIcon} isOpen={backIcon === true}>Backend<ChevronIcon isOpen={backIcon === true} icon={['fas', 'chevron-up']}/></StackTitle>
                                <IconContainer>
                                    <StackIcon isOpen={backIcon === true}>
                                        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><LogoTool src={NodeLogo} title="NodeJs"/></a>
                                        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><LogoTool src={FirebaseLogo} title="Firebase"/></a>
                                        <a href="https://expressjs.com/fr/" target="_blank" rel="noreferrer"><LogoTool src={ExpressJsLogo} title="ExpressJs"/></a>
                                        <a href="https://axios-http.com/" target="_blank" rel="noreferrer"><LogoTool src={AxiosLogo} title="Axios"/></a>
                                        <a href="https://www.npmjs.com/package/nodemon" target="_blank" rel="noreferrer"><LogoTool src={NodemonLogo} title="Nodemon"/></a>
                                        <a href="https://sequelize.org/" target="_blank" rel="noreferrer"><LogoTool src={SequelizeLogo} title="Sequelize"/></a>
                                        <a href="https://www.mongodb.com/fr-fr" target="_blank" rel="noreferrer"><LogoTool src={MongoDBLogo} title="MongoDB"/></a>
                                        <a href="https://www.mysql.com/fr/" target="_blank" rel="noreferrer"><LogoTool src={MySQLLogo} title="MySQL"/></a>
                                    </StackIcon>
                                </IconContainer>
                                </StackContainer>
                            <StackContainer isOpen={toolsIcon === true}>
                                <StackTitle onClick={showToolsIcon} isOpen={toolsIcon === true}>{t("Tools")}<ChevronIcon isOpen={toolsIcon === true} icon={['fas', 'chevron-up']}/></StackTitle>
                                <IconContainer>
                                    <StackIcon isOpen={toolsIcon === true}>
                                        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><LogoTool src={VSLogo} title="Visual Studio Code"/></a>
                                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><LogoTool src={GitLogo} title="Git"/></a>
                                        <a href="https://github.com/" target="_blank" rel="noreferrer"><LogoTool src={GitHubLogo} title="GitHub"/></a>
                                        <a href="https://about.gitlab.com/" target="_blank" rel="noreferrer"><LogoTool src={GitLabLogo} title="GitLab"/></a>
                                        <a href="https://www.figma.com/" target="_blank" rel="noreferrer"><LogoTool src={FigmaLogo} title="Figma"/></a>
                                        <a href="https://www.postman.com/" target="_blank" rel="noreferrer"><LogoTool src={PostmanLogo} title="Postman"/></a>
                                        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer"><LogoTool src={NetlifyLogo} title="Netlify"/></a>
                                        <a href="https://retool.com/" target="_blank" rel="noreferrer"><LogoTool src={RetoolLogo} title="Retool"/></a>
                                        <a href="https://www.notion.so/" target="_blank" rel="noreferrer"><LogoTool src={NotionLogo} title="Notion"/></a>
                                        <a href="https://www.diagrams.net/" target="_blank" rel="noreferrer"><LogoTool src={DiagramsLogo} title="Diagrams.net"/></a>
                                        <a href="https://www.airtable.com/" target="_blank" rel="noreferrer"><LogoTool src={AirtableLogo} title="Airtable"/></a>
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