import styled from 'styled-components'
import { useContext, useState, useEffect, useRef } from 'react'
import { ThemeContext } from '../../utils/context'
import { StyledLink } from '../../utils/style/Atoms'
import LanguageButton from '../LanguageButton'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        position: fixed;
        transition: transform 0.5s ease-in-out;
        transform: ${({ isOpen }) => isOpen ? "translateX(0)" : "translateX(-161%)"};
      }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        justify-content: flex-start;
        width: 50%;
        height: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        position: fixed;
        transition: transform 0.5s ease-in-out;
        transform: ${({ isOpen }) => isOpen ? "translateX(0)" : "translateX(-101%)"};
    }
`

const MobileToggleButton = styled.div`
        flex-direction: column;
        justify-content: space-around;
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: 1px solid;
        border-color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        background-color: transparent;
        cursor: pointer;
        right: 20px;
        display: none;
        z-index: 10;
        padding: 10px;
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
                isOpen ? 'rotate(45deg) translateX(3.5px) translateY(-3px)' : 'rotate(0deg)'};
            }
            :nth-child(2) {
                opacity: ${({ isOpen }) =>
                isOpen ? '0' : '1'};
                transform: ${({ isOpen }) =>
                isOpen ? 'translateX(20px)' : 'translateX(0px)'};
            }
            :nth-child(3) {
                transform: ${({ isOpen }) =>
                isOpen ? 'rotate(-45deg) translateX(3.5px) translateY(3px)' : 'rotate(0deg)'};
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

const NavIcon = styled(FontAwesomeIcon)`
  display: none;
  color: white;
  padding-right: 15px;
  @media screen and (max-width: 1200px) {
    display: inline-block;
}
@media screen and (max-width: 768px) {
  display: inline-block;
}
`

function Header() {
    const { theme } = useContext(ThemeContext)
    const { t } = useTranslation();
    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sideBar);
    const closeSideBar = () => setSideBar(false);
    
    const ref = useRef();
    useOnClickOutside(ref, () => setSideBar(false));

    function useOnClickOutside(ref, handler) {
        useEffect(() => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener)
            };
        }, [ref, handler])
    }



    return (
        <NavContainer>
            <Logo />
            <MobileToggleButton ref={ref} isOpen={sideBar === true} isDarkMode={theme === 'dark'} onClick={showSideBar}>
                <div isDarkMode={theme === 'dark'}/>
                <div isDarkMode={theme === 'dark'}/>
                <div isDarkMode={theme === 'dark'}/>
            </MobileToggleButton>
            <NavLine isDarkMode={theme === 'dark'} isOpen={sideBar === true}>
                <StyledLink to="/" onClick={closeSideBar}><NavIcon icon={['fas', 'home']}/>{t("Home")}</StyledLink>
                <StyledLink to="/projects" onClick={closeSideBar}><NavIcon icon={['fas', 'folder']}/>{t("Projects")}</StyledLink>
                <StyledLink to="/about" onClick={closeSideBar}><NavIcon icon={['fas', 'user']}/>{t("About")}</StyledLink>
                <StyledLink to="/contact" onClick={closeSideBar}><NavIcon icon={['fas', 'envelope']}/>{t("Contact")}</StyledLink>
            </NavLine>
            <LanguageButton />
        </NavContainer>
    )
}

export default Header