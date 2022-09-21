import styled, { keyframes } from 'styled-components'
import { ThemeContext } from '../../utils/context'
import { useContext } from 'react'

const LoaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({ isDarkMode }) =>
    isDarkMode ? 'white' : 'black'};
    z-index: 15;
`

const LogoContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
`

const moving = keyframes`
    0% {
        color: transparent;
        letter-spacing: 0px;
    }
    100% {
        color: white;
        letter-spacing: -20px;
`

const LogoLetter = styled.p`
    font-family: 'Raleway', Helvetica, sans serif;
    font-size: 90px;
    font-weight: 600;
    letter-spacing: -20px;
    animation: ${moving} 1s ease-out 1 forwards;
    color: transparent;
    }
`

function LoaderSpinner() {
    const { theme } = useContext(ThemeContext)

    return(
        <LoaderContainer>
            {/* <LoaderIcon icon={['fas', 'sync']}></LoaderIcon> */}
            <LogoContainer>
                <LogoLetter isDarkMode={theme === 'dark'}>ADF</LogoLetter>
            </LogoContainer>
        </LoaderContainer>
    )
}

export default LoaderSpinner