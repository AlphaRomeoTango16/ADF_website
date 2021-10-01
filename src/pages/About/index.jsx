import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ProfilPicture from '../../assets/ProfilPicture.PNG'
import ReactLogo from '../../assets/logo/react.svg'
import VueLogo from '../../assets/logo/vue.svg'

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
    font-family: 'Heiti SC', Helvetica, sans-serif;
    font-size: 25px;
    margin: 15px 0px 15px 0px;
    color: ${colors.secondary};
`

const AboutText = styled.p`
    font-family: 'Heiti SC', Helvetica, sans-serif;
    font-weight: bold;
    font-size: 15px;
    color: ${colors.secondary};
`

const LogoContainer = styled.div`
    display: flex;
`

const LogoTool = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 100%;
    margin-right: 10px;
    background-color: ${colors.secondary};
`

function About() {
    return (
        <AboutWrapper>
            <AboutContainer>
                <PictureContainer src={ProfilPicture} />
                <DescriptionContainer>
                    <AboutTitle>Je me présente, Arthur della Faille</AboutTitle>
                    <AboutText>
                        Passionné par la création sous toutes ses formes et très curieux de nature,
                        j'ai besoin de découvrir, d'analyser et de comprendre pour nourrir mon travail.
                        Après plusieurs années dans le secteur de la publicité à des fonctions managériales,
                        j'ai décidé de passer du côté des créateurs en devenant développeur web full-stack.
                    </AboutText>
                    <AboutTitle>Stack technique</AboutTitle>
                    <LogoContainer>
                        <LogoTool src={ReactLogo} />
                        <LogoTool src={VueLogo}/>
                    </LogoContainer>
                </DescriptionContainer>
            </AboutContainer>
        </AboutWrapper>
    )
}

export default About