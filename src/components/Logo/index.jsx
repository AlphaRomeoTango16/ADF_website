import styled from 'styled-components'

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
        -webkit-text-stroke: 1px black;
        color: white;
        letter-spacing: 5px;
    }
`

function Logo() {
    return (
        <LogoContainer>
            <LogoLetter>ADF</LogoLetter>
        </LogoContainer>
    )
}

export default Logo