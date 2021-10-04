import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ProfilPicture from '../../assets/ProfilPicture.PNG'
import ReactLogo from '../../assets/logo/react.svg'
import VueLogo from '../../assets/logo/vue.svg'
import HtmlLogo from '../../assets/logo/html.svg'
import CssLogo from '../../assets/logo/css.svg'
import JsLogo from '../../assets/logo/javascript.svg'
import NodeLogo from '../../assets/logo/nodejs.svg'

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.primary};
  height: 450px;
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
`

const PictureContainer = styled.img`
    height: 80%;
    border-radius: 100%;
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
`

const AboutTitle = styled.h2`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 300;
    font-size: 25px;
    margin: 15px 0px 15px 0px;
    color: ${colors.secondary};
`

const AboutText = styled.p`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 100;
    font-size: 15px;
    color: ${colors.secondary};
`

const LogoContainer = styled.div`
    display: flex;
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
    }
`

function About() {
    return (
        <AboutWrapper>
            <AboutContainer>
                <PictureContainer src={ProfilPicture} />
                <DescriptionContainer>
                    <AboutTitle>Je me présente, Arthur della Faille, développeur fullstack</AboutTitle>
                    <AboutText>
                        Passionné par la création sous toutes ses formes et très curieux de nature,
                        j'ai besoin de découvrir, d'analyser et de comprendre pour nourrir mon travail.
                        Après plusieurs années dans le secteur de la publicité à des fonctions managériales,
                        j'ai décidé de passer du côté des créateurs en devenant développeur web fullstack.
                    </AboutText>
                    <AboutTitle>Stack technique</AboutTitle>
                    <LogoContainer>
                        <a href="https://reactjs.org/"><LogoTool src={ReactLogo} title="ReactJs"/></a>
                        <a href="https://vuejs.org/"><LogoTool src={VueLogo} title="VueJs"/></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/HTML"><LogoTool src={HtmlLogo} title="HMTL5"/></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/CSS"><LogoTool src={CssLogo} title="CSS3"/></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript"><LogoTool src={JsLogo} title="Javascript"/></a>
                        <a href="https://nodejs.org/en/"><LogoTool src={NodeLogo} title="NodeJs"/></a>
                    </LogoContainer>
                </DescriptionContainer>
            </AboutContainer>
        </AboutWrapper>
    )
}

export default About