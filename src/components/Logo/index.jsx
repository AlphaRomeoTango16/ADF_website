import styled from 'styled-components'
import { ThemeContext } from '../../utils/context'
import { useContext } from 'react'

const LogoContainer = styled.div`
    width: 100px;
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
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        color: ${({ isDarkMode }) =>
        isDarkMode ? 'black' : 'white'};
        letter-spacing: 5px;
    }
`

function Logo() {
    const { theme } = useContext(ThemeContext)

    return (
        <LogoContainer>
            <LogoLetter isDarkMode={theme === 'dark'}>ADF</LogoLetter>
        </LogoContainer>
    )
}

export default Logo