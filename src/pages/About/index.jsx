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
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  height: 60vh;
  @media screen and (max-width: 1020px) {
    height: 100vh;
    align-items: start;
}
@media screen and (max-width: 768px) {
    height: 100vh;
    align-items: start;
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
    flex-direction: column-reverse;
    width: 100%;
    align-items: center;
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
        width: 50%;
        height: 50%;
        padding-top: 20px;
    }
    @media screen and (max-width: 768px) {
        width: 50%;
        height: 50%;
        padding-top: 20px;
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
    }
    @media screen and (max-width: 768px) {
        font-size: 19px;
  }
`

const LogoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0px 0px 0px;
`

const LogoTool = styled.img`
    height: 50px;
    width: 50px;
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
                    <LogoContainer>
                        <a href="https://reactjs.org/"><LogoTool src={ReactLogo} title="ReactJs"/></a>
                        <a href="https://vuejs.org/"><LogoTool src={VueLogo} title="VueJs"/></a>
                        <a href="https://sass-lang.com/"><LogoTool src={SassLogo} title="Sass"/></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/HTML"><LogoTool src={HtmlLogo} title="HMTL5"/></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/CSS"><LogoTool src={CssLogo} title="CSS3"/></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript"><LogoTool src={JsLogo} title="Javascript"/></a>
                        <a href="https://nodejs.org/en/"><LogoTool src={NodeLogo} title="NodeJs"/></a>
                    </LogoContainer>
                </DescriptionContainer>
            </AboutContainer>
        </AboutWrapper>
        </div>
    )
}

export default About