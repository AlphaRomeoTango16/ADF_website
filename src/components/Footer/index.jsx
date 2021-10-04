import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../utils/context'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`

const NightModeButton = styled.button`
    padding: 30px;
    background-color: transparent;
    font-family: 'Heiti SC', Helvetica, sans-serif;
    border: none;
    cursor: pointer;
`

const CopyrightLine = styled.div`
    font-family: 'Heiti SC', Helvetica, sans-serif;
    padding-bottom: 20px;
    font-size: 10px;
`

function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Mode : {theme === 'light' ? 'Sombre' : 'Jour'}
            </NightModeButton>
            <CopyrightLine>Copyright ©2021 | All rights reserved, Arthur della Faille.</CopyrightLine>
        </FooterContainer>
    )
}

export default Footer