import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Heiti SC', Helvetica, sans-serif;
    }
    body {
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'black' : 'white'};
        margin: 0;
        color : ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        transition: color 0.50s linear;
        transition: background-color 0.50s linear;
    }
    button {
        color : ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
    }
    a {
        color : ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
    }
    select {
        color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        select::-ms-expand {
            display: none;
       }
    }
`

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle