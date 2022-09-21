import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context'
// import cursorBlack from '../../assets/cursor_black.png'
// import cursorWhite from '../../assets/cursor_white.png'
import StyledLink from '../style/Atoms'
import colors from '../style/colors'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Heiti SC', Helvetica, sans-serif;
    }
    html {
        cursor: url('../../assets/cursor_black.png'), auto;
    }
    body {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? colors.primary : 'white'};
        margin: 0;
        color : ${({ isDarkMode }) =>
        isDarkMode ? 'white' : colors.primary};
        transition: color 0.50s linear;
        transition: background-color 0.50s linear;
    }
    @media screen and (max-width: 1200px) {
        body {
            height: 100vh;
        }
      }
    @media screen and (max-width: 768px) {
        body {
            height: 100vh;
        }
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    button {
        color : ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        border-color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'black' : 'white'};
        :hover {
            background-color: ${({ isDarkMode }) =>
            isDarkMode ? 'white' : 'black'};
            color : ${({ isDarkMode }) =>
            isDarkMode ? 'black' : 'white'};
        }
    }
    a {
        color : ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
    }
    ${StyledLink} {
        ::after {
            background: ${({ isDarkMode }) =>
            isDarkMode ? 'white' : 'black'};
          }
        @media screen and (max-width: 1200px) {
            color: ${({ isDarkMode }) =>
            isDarkMode ? 'black' : 'white'};
        }
        @media screen and (max-width: 768px) {
          color: ${({ isDarkMode }) =>
          isDarkMode ? 'black' : 'white'};
      }
    }
    select {
        color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
       }
    }
`

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle