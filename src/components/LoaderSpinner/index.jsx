import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoaderContainer = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 15;
`

const LoaderIcon = styled(FontAwesomeIcon)`
    color: black;
    position: fixed;
    font-size: 500%;
    animation: rotate 2s infinite linear;
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

function LoaderSpinner() {
    return(
        <LoaderContainer>
            <LoaderIcon icon={['fas', 'sync']}></LoaderIcon>
        </LoaderContainer>
    )
}

export default LoaderSpinner