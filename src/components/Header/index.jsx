import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../../assets/Logo.png'

const HomeLogo = styled.img`
    height: 70px;
`

const NavContainer = styled.nav`
    padding: 70px;
    display: flex;
    justify-content: space-between;
    align-item: center;
`

const NavLine = styled.nav`
    display: flex;
    padding: 20px;
    align-item: center;
`

function Header() {
    return (
        <NavContainer>
            <HomeLogo src={Logo}/>
            <NavLine>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/projects">Projets</StyledLink>
                <StyledLink to="/about">À propos</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </NavLine>
            <button>Langage</button>
        </NavContainer>
    )
}

export default Header