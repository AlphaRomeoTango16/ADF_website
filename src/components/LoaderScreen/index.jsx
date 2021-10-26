import styled from 'styled-components'

const LoaderWrapper = styled.div`
    background-color: white;
    position: fixed;
    z-index: 20;
    width: 100%;
    height: 100vh;
    animation: disappear 1s 3.5s forwards;
    @keyframes disappear {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            z-index: -20;
            top: -100%;
        }
    }
`

const LoaderContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-items: center;
    top: 40%;
`

const NameContainer = styled.div`
    display: flex;
    justify-content: center;
`

const FirstName = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 20px;
`

const LastName = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 20px;
    
`

const LastName2 = styled.div`
    display: flex;
    flex-direction: row;
`

const FirstLetter1 = styled.div`
    font-size: 100px;
    font-family: 'Raleway', Helvetica, sans-serif;
    font-weight: bold;
    animation: moveright 2s linear 1s forwards;
    @keyframes moveright {
        0% {
            transform: translateX(0px);
            animation-timing-function:ease-in-out
        }
        100% {
            transform: translateX(480px);
            animation-timing-function:ease-in-out
        }
    }
`

const FirstLetter2 = styled.div`
    font-size: 100px;
    font-family: 'Raleway', Helvetica, sans-serif;
    font-weight: bold;
    animation: moveright2 2s linear 1s forwards;
    @keyframes moveright2 {
        0% {
            transform: translateX(0px);
            animation-timing-function:ease-in-out
        }
        100% {
            transform: translateX(95px);
            animation-timing-function:ease-in-out
        }
    }
`

const FirstLetter3 = styled.div`
    font-size: 100px;
    font-family: 'Raleway', Helvetica, sans-serif;
    font-weight: bold;
    animation: moveleft 2s linear 1s forwards;
    @keyframes moveleft {
        0% {
            transform: translateX(0px);
            animation-timing-function:ease-in-out
        }
        100% {
            transform: translateX(-190px);
            animation-timing-function:ease-in-out
        }
`

const RestName = styled.div`
    font-size: 100px;
    font-family: 'Raleway', Helvetica, sans-serif;
    font-weight: bold;
    animation: reduct 1s linear 1s forwards;
        @keyframes reduct {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
`

function LoaderSreen() {

    return (
        <LoaderWrapper>
            <LoaderContainer>
                <NameContainer>
                    <FirstName>
                        <FirstLetter1>A</FirstLetter1>
                        <RestName>RTHUR</RestName>
                    </FirstName>
                    <LastName>
                        <FirstLetter2>D</FirstLetter2>
                        <RestName>ELLA</RestName>
                    </LastName>
                    <LastName2>
                        <FirstLetter3>F</FirstLetter3>
                        <RestName>AILLE</RestName>
                    </LastName2>
                </NameContainer>
            </LoaderContainer>
        </LoaderWrapper>
    )
}

export default LoaderSreen