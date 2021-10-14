import styled from 'styled-components'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../utils/context'
import { StyledLink } from '../../utils/style/Atoms'
import LanguageButton from '../LanguageButton'
// import Logo from '../../assets/Logo.png'
// import darkLogo from '../../assets/Logo_dark.png'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo/index'
import { useEffect } from 'react/cjs/react.development'

// const HomeLogo = styled.img`
//     height: 70px;
// `

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1200px) {
      }
    @media screen and (max-width: 375px) {
        flex-direction: column;
        justify-content: center;
`

const NavLine = styled.nav`
    width: 50%;
    display: flex;
    padding: 20px;
    z-index: 1;
    align-item: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      }
    @media screen and (max-width: 375px) {
        flex-direction: column;
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        justify-content: flex-start;
        width: 20%;
        height: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        transition: transform 0.5s ease-in-out;
        transform: ${({ isOpen }) => isOpen ? "translateX(0)" : "translateX(-100%)"};
    }
`

const MobileToggleButton = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${({ isDarkMode }) =>
    isDarkMode ? 'white' : 'black'};
    border-radius: 100%;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 30px;
    display: none;
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 375px) {
      display: flex;
  }
`

const Line1 = styled.div`
    background-color: ${({ isDarkMode }) =>
    isDarkMode ? 'black' : 'white'};
    height: 5px;
    margin-bottom: 5px;
    margin-left: 7px;
    margin-right: 7px;
`

const Line2 = styled.div`
    background-color: ${({ isDarkMode }) =>
    isDarkMode ? 'black' : 'white'};
    height: 5px;
    margin-bottom: 5px;
    margin-left: 7px;
    margin-right: 7px;
`

const Line3 = styled.div`
    background-color: ${({ isDarkMode }) =>
    isDarkMode ? 'black' : 'white'};
    height: 5px;
    margin-left: 7px;
    margin-right: 7px;
`

function Header() {
    const { theme } = useContext(ThemeContext)
    const { t } = useTranslation();
    const [sideBar, setSideBar] = useState(true);
    const showSideBar = () => setSideBar(!sideBar)

    useEffect(() => {
        const mobile = window.matchMedia("(max-width: 768px)").matches
        if (mobile) {
            setSideBar(false)
        }
    }, [])

    return (
        <NavContainer>
            <Logo />
            <MobileToggleButton isDarkMode={theme === 'dark'} onClick={showSideBar}>
                <Line1 isDarkMode={theme === 'dark'}/>
                <Line2 isDarkMode={theme === 'dark'}/>
                <Line3 isDarkMode={theme === 'dark'}/>
            </MobileToggleButton>
            <NavLine isDarkMode={theme === 'dark'} isOpen={sideBar === true}>
                <StyledLink to="/">{t("Home")}</StyledLink>
                <StyledLink to="/projects">{t("Projects")}</StyledLink>
                <StyledLink to="/about">{t("About")}</StyledLink>
                <StyledLink to="/contact">{t("Contact")}</StyledLink>
            </NavLine>
            <LanguageButton />
        </NavContainer>
    )
}

export default Header