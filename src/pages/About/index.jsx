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
import Malt from '../../assets/Logo_Malt.svg'

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.primary};
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

  }
@media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 30px 0px 30px 0px;
}
`

const PictureContainer = styled.img`
    height: 300px;
    border-radius: 100%;
    @media screen and (max-width: 1200px) {
        height: 300px;
    }
    @media screen and (max-width: 768px) {
        width: 30%;
        height: 30%;
        padding-top: 20px;
  }
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 768px) {
        padding-left: 20px;
        padding-right: 10px;
  }
`

const AboutTitle = styled.h2`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 25px;
    margin: 0px;
    color: ${colors.secondary};
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
`

const LogoContainer = styled.div`
    display: flex;
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
`

const FreelanceTitle = styled.h2`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 25px;
    margin: 20px 0px 0px 0px;
    color: ${colors.secondary};
`

const FreelanceDescription = styled.p`
    display: flex;
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 100;
    font-size: 15px;
    margin: 10px 0px 0px 0px;
    color: ${colors.secondary};
`

const FreelanceImage = styled.img`
    width: 50px;
    padding-left: 5px;
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
                    <FreelanceTitle>{t("FreelanceTitle")}</FreelanceTitle>
                    <FreelanceDescription>{t("FreelanceDescription")}<a href="https://www.malt.fr/profile/ardellafaille"><FreelanceImage src={Malt} /></a></FreelanceDescription>
                </DescriptionContainer>
            </AboutContainer>
        </AboutWrapper>
        </div>
    )
}

export default About