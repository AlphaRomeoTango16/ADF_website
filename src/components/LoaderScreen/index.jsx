import styled from 'styled-components'

const LoaderWrapper = styled.div`
    background-color: white;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    animation: disappear 1s 5s forwards;
    @keyframes disappear {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            display: none;
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
            transform: translateX(475px);
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
            transform: translateX(90px);
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
            transform: translateX(-195px);
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

const Studio = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const StudioName = styled.div`
    display: flex;
    font-size: 60px;
    font-family: 'Anton', Helvetica, sans-serif;
    justify-content: center;
    letter-spacing: -2px;
    color: white;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    animation: studio 1s linear 2s forwards;
    opacity: 0;
    @keyframes studio {
        0% {
            width: 0;
        }
        100% {
            opacity: 1;
            width: 10%;
            text-shadow: 10px 0px 10px black;
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
                <Studio>
                    <StudioName>
                        STUDIO
                    </StudioName>
                </Studio>
            </LoaderContainer>
        </LoaderWrapper>
    )
}

export default LoaderSreen