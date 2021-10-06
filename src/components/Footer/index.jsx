import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../utils/context'
// import LinkedinLogo from '../../assets/logo/Linkedin.svg'
// import GitHubLogo from '../../assets/logo/GitHub.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`

const NightModeButton = styled.button`
    padding: 30px;
    background-color: transparent;
    font-family: 'Heiti SC', Helvetica, sans-serif;
    border: none;
    cursor: pointer;
`

const CopyrightLine = styled.div`
    font-family: 'Heiti SC', Helvetica, sans-serif;
    padding-bottom: 20px;
    font-size: 10px;
`

const LogoContainer = styled.div`
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 70px;
`

const styleIcon = { fontSize: "2em" }

function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext)
    // const time = new Date().getHours();
    // function AutomaticDarkMode() {
    //     if (time >= 19) {
    //         return theme = 'dark'
    //     }
    // };
    // AutomaticDarkMode();
    // console.log(theme)


    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Mode : {theme === 'light' ? 'Sombre' : 'Jour'}
            </NightModeButton>
            <LogoContainer>
                <a href="https://www.linkedin.com/in/arthur-della-faille-46a2815a/"><FontAwesomeIcon icon={['fab', 'linkedin']} style={styleIcon} title="LinkedIn"/></a>
                <a href="https://github.com/AlphaRomeoTango16"><FontAwesomeIcon icon={['fab', 'github']} style={styleIcon} title="GitHub"/></a>
            </LogoContainer>
            <CopyrightLine>Copyright ©2021 | All rights reserved, Arthur della Faille.</CopyrightLine>
        </FooterContainer>
    )
}

export default Footer