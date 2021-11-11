import styled from 'styled-components'
import { ThemeContext } from '../../utils/context'
import { useContext } from 'react'

const Link = styled.a`
    text-decoration: none;
`

const LogoContainer = styled.div`
    width: 200px;
    @media screen and (max-width: 1200px) {
        display: flex;
        justify-content: center;
      }
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
`

const LogoLetter = styled.p`
    font-family: 'Raleway', Helvetica, sans serif;
    font-size: 90px;
    font-weight: 600;
    letter-spacing: -20px;
    margin: 0;
    cursor: pointer;
    transition: all 2s;
    :hover {
        text-shadow: -2px 1px 9px rgba(150, 150, 150, 0.88);
        color: transparent;
        letter-spacing: 5px;
        background: repeating-linear-gradient(45deg, black, black 30px, white 30px, white 60px);
        background-clip: text;
        -webkit-background-clip: text;
    }
    @media screen and (max-width: 1200px) {
        :active {
            text-shadow: -2px 1px 9px rgba(150, 150, 150, 0.88);
            color: transparent;
            letter-spacing: 5px;
            background: repeating-linear-gradient(45deg, black, black 30px, white 30px, white 60px);
            background-clip: text;
            -webkit-background-clip: text;
        }
      }
    @media screen and (max-width: 768px) {
        :active {
            text-shadow: -2px 1px 9px rgba(150, 150, 150, 0.88);
            color: transparent;
            letter-spacing: 5px;
            background: repeating-linear-gradient(45deg, black, black 30px, white 30px, white 60px);
            background-clip: text;
            -webkit-background-clip: text;
        }
`

function Logo() {
    const { theme } = useContext(ThemeContext)

    return (
        <Link href="/">
            <LogoContainer>
                <LogoLetter isDarkMode={theme === 'dark'}>ADF</LogoLetter>
            </LogoContainer>
        </Link>
    )
}

export default Logo