import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../../assets/Logo.png'
import LanguageSelector from '../Language_selector'
import { Text } from '../../utils/context'

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

    return (
        <NavContainer>
            <HomeLogo src={Logo}/>
            <NavLine>
                <StyledLink to="/"><Text tid="Home" /></StyledLink>
                <StyledLink to="/projects"><Text tid="Projects" /></StyledLink>
                <StyledLink to="/about"><Text tid="About" /></StyledLink>
                <StyledLink to="/contact"><Text tid="Contact" /></StyledLink>
            </NavLine>
            <LanguageSelector />
        </NavContainer>
    )
}

export default Header