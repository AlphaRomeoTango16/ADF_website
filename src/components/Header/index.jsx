import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { StyledLink } from '../../utils/style/Atoms'
import SwitchButton from '../SwitchButton'
import Logo from '../../assets/Logo.png'
import darkLogo from '../../assets/Logo_dark.png'

const HomeLogo = styled.img`
    height: 70px;
`

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
`

function Header() {
    const { theme } = useContext(ThemeContext)

    return (
        <NavContainer>
            <HomeLogo src={theme === 'dark' ? darkLogo : Logo}/>
            <NavLine>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/projects">Projets</StyledLink>
                <StyledLink to="/about">À propos</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </NavLine>
            <SwitchButton />
        </NavContainer>
    )
}

export default Header