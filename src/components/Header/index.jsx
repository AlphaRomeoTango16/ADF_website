import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import { useState } from 'react'
import Logo from '../../assets/Logo.png'
import French from '../../assets/French_flag.png'
import English from '../../assets/English_flag.png'
import colors from '../../utils/style/colors'
import {IoChevronDownCircleOutline} from 'react-icons/io5'

const HomeLogo = styled.img`
    height: 70px;
`

const Flag = styled.img`
    height: 10px;
    padding-right: 10px;
    padding-left: 10px;
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

const LanguageButton = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 30px;
    padding: 3px 10px 3px 10px;
    font-family: 'Heiti SC', Helvetica, sans-serif;
    font-size: 18px;
    justify-content: space-between;
    border: none;
    cursor: pointer;
    color: ${colors.primary};
    :hover{
        border-radius: 5px;
        background-color: black;
        border: 1px solid black;
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
    top: 30px;
    position: absolute;
    width: 120px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
`

const LanguageList = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0;
`

const LanguageItem = styled.li`
    border-bottom: 1px solid #dddddd;
    height: 20px;
    padding-top: 5px;
    :hover {
        background-color: #e3e3e3;
    }
`

const LanguageLink = styled.a`
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    font-size: 13px;
    color: #333333;
    width: 100%;
`

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

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
                <LanguageButton onClick={toggling} className="menu-trigger">Langues<Span><IoChevronDownCircleOutline /></Span></LanguageButton>
                {isOpen && (
                <LanguageMenu>
                    <LanguageList>
                        <LanguageItem><LanguageLink href="/french">Français<Flag src={French}/></LanguageLink></LanguageItem>
                        <LanguageItem><LanguageLink href="/english">Anglais<Flag src={English}/></LanguageLink></LanguageItem>
                    </LanguageList>
                </LanguageMenu>
                )}
            </DropdownMenu>
        </NavContainer>
    )
}

export default Header