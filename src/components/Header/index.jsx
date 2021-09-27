import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import { useState, useRef } from 'react'
import Logo from '../../assets/Logo.png'
import colors from '../../utils/style/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeLogo = styled.img`
    height: 70px;
`

const NavContainer = styled.nav`
    padding: 70px;
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

const LanguageButton = styled.button`
    background-color: transparent;
    align-items: center;
    height: 30px;
    padding: 3px 10px 3px 10px;
    font-family: 'Heiti SC', Helvetica, sans-serif;
    font-size: 18px;
    justify-content: space-between;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: ${colors.primary};
    :hover{
        border: 1px solid black;
    }
    :active{
        background-color: black;
        color: ${colors.secondary}
    }
`

const Span = styled.span`
    padding-left: 10px;
`

const DropdownMenu = styled.div`
    position: relative;
`

const LanguageMenu = styled.nav`
    background: #ffffff;
    position: absolute;
    top: 30px;
    right: 0;
    width: 120px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    :active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`

const LanguageList = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0;
`

const LanguageItem = styled.li`
    border-bottom: 1px solid #dddddd;
    padding-top: 5px;
`

const LanguageLink = styled.a`
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
`

function Header() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return (
        <NavContainer>
            <HomeLogo src={Logo}/>
            <NavLine>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/projects">Projets</StyledLink>
                <StyledLink to="/about">À propos</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </NavLine>
            <DropdownMenu>
                <LanguageButton onClick={onClick} className="menu-trigger">Langues<Span><FontAwesomeIcon icon="chevron-down"/></Span></LanguageButton>
                <LanguageMenu ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                    <LanguageList>
                        <LanguageItem><LanguageLink href="/french">Français</LanguageLink></LanguageItem>
                        <LanguageItem><LanguageLink href="/english">Anglais</LanguageLink></LanguageItem>
                    </LanguageList>
                </LanguageMenu>
            </DropdownMenu>
        </NavContainer>
    )
}

export default Header