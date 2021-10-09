import styled from 'styled-components'

const LogoContainer = styled.div`
    width: 100px;
`

const LogoLetter = styled.p`
    font-family: 'Cabin', Helvetica, sans serif;
    font-size: 90px;
    font-weight: 600;
    letter-spacing: -15px;
    margin: 0;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoLetter>ADF</LogoLetter>
        </LogoContainer>
    )
}

export default Logo