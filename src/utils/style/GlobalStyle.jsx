import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context'
import StyledLink from '../style/Atoms'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Heiti SC', Helvetica, sans-serif;
    }
    body {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'black' : 'white'};
        margin: 0;
        color : ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        transition: color 0.50s linear;
        transition: background-color 0.50s linear;
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