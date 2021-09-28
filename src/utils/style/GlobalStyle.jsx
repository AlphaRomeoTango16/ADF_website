import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context'

const StyledGlobalStyle = createGlobalStyle`
    div {
        font-family: 'Heiti SC', Helvetica, sans-serif;
    }
    body {
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'black' : 'white'};
        margin: 0;
        color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
    }
`

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle