import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../utils/context'
import LinkedinLogo from '../../assets/logo/Linkedin.svg'
import GitHubLogo from '../../assets/logo/GitHub.svg'

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

const LogoButton = styled.img`
    width: 30px;
`

function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Mode : {theme === 'light' ? 'Sombre' : 'Jour'}
            </NightModeButton>
            <LogoContainer>
                <a href="https://www.linkedin.com/in/arthur-della-faille-46a2815a/"><LogoButton src={LinkedinLogo} title="LinkedIn"/></a>
                <a href="https://github.com/AlphaRomeoTango16"><LogoButton src={GitHubLogo} title="GitHub"/></a>
            </LogoContainer>
            <CopyrightLine>Copyright ©2021 | All rights reserved, Arthur della Faille.</CopyrightLine>
        </FooterContainer>
    )
}

export default Footer