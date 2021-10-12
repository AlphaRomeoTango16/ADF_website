import styled from 'styled-components'
// import { useContext } from 'react'
// import { ThemeContext } from '../../utils/context'
import { StyledLink } from '../../utils/style/Atoms'
import LanguageButton from '../LanguageButton'
// import Logo from '../../assets/Logo.png'
// import darkLogo from '../../assets/Logo_dark.png'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo/index'

// const HomeLogo = styled.img`
//     height: 70px;
// `

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavLine = styled.nav`
    width: 50%;
    display: flex;
    padding: 20px;
    align-item: center;
    justify-content: space-between;
    @media screen and (max-width: 1200px) {
        background-color: red;
      }
    @media screen and (max-width: 768px) {
        background-color: pink;
        flex-direction: column;
        justify-content: flex-start;
        width: 20%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
    }
`

function Header() {
    // const { theme } = useContext(ThemeContext)
    const { t } = useTranslation();

    return (
        <NavContainer>
            <Logo />
            {/* <HomeLogo src={theme === 'dark' ? darkLogo : Logo}/> */}
            <NavLine>
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