import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Ron from '../../assets/Error.gif'

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.primary};
    height: 450px;
    align-items: center;
`

const ErrorNumber = styled.h2`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${colors.secondary}
`

const ErrorTitle = styled.p`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 500;
    color: ${colors.secondary}
`

const ErrorSubtitle = styled.p`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 300;
    color: ${colors.secondary}
`

const ErrorGif = styled.img`
    position: relative;
    width: 300px;
    height: 200px;
    border: none;
    object-fit: cover;
    bottom: 0;
`

function Error() {
    return (
        <ErrorWrapper>
            <ErrorNumber>404</ErrorNumber>
            <ErrorTitle>Oups...</ErrorTitle>
            <ErrorSubtitle></ErrorSubtitle>
            <ErrorGif src={Ron}></ErrorGif>
        </ErrorWrapper>
    )
}

export default Error