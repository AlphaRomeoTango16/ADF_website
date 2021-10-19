import styled from 'styled-components'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../utils/context'
import { StyledLink } from '../../utils/style/Atoms'
import LanguageButton from '../LanguageButton'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo/index'
import { useEffect } from 'react/cjs/react.development'

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
      }
    @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        justify-content: flex-start;
        width: 50%;
        height: 120%;
        left: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        transition: transform 0.5s ease-in-out;
        transform: ${({ isOpen }) => isOpen ? "translateX(0)" : "translateX(-101%)"};
      }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        justify-content: flex-start;
        width: 50%;
        height: 120%;
        left: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        transition: transform 0.5s ease-in-out;
        transform: ${({ isOpen }) => isOpen ? "translateX(0)" : "translateX(-101%)"};
    }
`

const MobileToggleButton = styled.div`
        flex-direction: column;
        justify-content: space-around;
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: transparent;
        cursor: pointer;
        right: 20px;
        display: none;
        z-index: 10;
        padding: 5px;
        div {
            position: relative;
            background-color: ${({ isDarkMode }) =>
            isDarkMode ? 'white' : 'black'};
            border-radius: 20px;
            height: 5px;
            transition: all 0.3s linear;
            transform-origin: 1px;
            :first-child {
                transform: ${({ isOpen }) =>
                isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
            }
            :nth-child(2) {
                opacity: ${({ isOpen }) =>
                isOpen ? '0' : '1'};
                transform: ${({ isOpen }) =>
                isOpen ? 'translateX(20px)' : 'translateX(0px)'};
            }
            :nth-child(3) {
                transform: ${({ isOpen }) =>
                isOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
            }
        }
    }
    @media screen and (max-width: 1200px) {
        display: flex;
    }
    @media screen and (max-width: 768px) {
      display: flex;
  }
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

    document.addEventListener('click', function(event){
        const menu = document.getElementById('NavLine');
        if (event.target && event.target !== menu){
            return sideBar === false
        }
    })


    return (
        <NavContainer>
            <Logo />
            <MobileToggleButton isOpen={sideBar === true} isDarkMode={theme === 'dark'} onClick={showSideBar}>
                <div isDarkMode={theme === 'dark'}/>
                <div isDarkMode={theme === 'dark'}/>
                <div isDarkMode={theme === 'dark'}/>
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