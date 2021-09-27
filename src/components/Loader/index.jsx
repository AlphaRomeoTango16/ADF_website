import styled from 'styled-components'

const LoaderWrapper = styled.div`
    background-color: white;
    position: fixed;
    z-index: 1;
    width: 200%;
    height: 200%;
    animation: disappear 3s linear 1s forwards;
    @keyframes disappear {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`
const FirstName = styled.div`
    display: flex;
    flex-direction: row;
`

const FirstLetter = styled.div`
    font-size: 50px;
    font-family: 'Avenir', Helvetica, sans-serif;
    font-weight: bold;
`

const RestFirstName = styled.div`
    font-size: 50px;
    font-family: 'Avenir', Helvetica, sans-serif;
    font-weight: bold;
`


function Loader() {
    return (
        <LoaderWrapper>
            <FirstName>
                <FirstLetter>A</FirstLetter>
                <RestFirstName>RTHUR</RestFirstName>
            </FirstName>
        </LoaderWrapper>
    )
}

export default Loader