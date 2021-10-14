import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Dawn from '../../assets/Dawn5.gif'

const HomeWrapper = styled.div`
    display: flex;
    background-color: ${colors.primary};
    align-items: center;
    height: 60vh;
    @media screen and (max-width: 1200px) {
        height: 50vh;
      }
    @media screen and (max-width: 375px) {
        height: 50vh;
    }
`

const HomeContainer = styled.div`
    margin: 70px;
    display: flex;
    flex-direction: column;
`

const HomeTitle = styled.div`
    font-family: 'Raleway', Helvetica, sans-serif;
    display: flex;
    flex-direction: row;
    margin: 0;
    font-size: 50px;
    line-height: 70px;
    font-weight: bold;
    color: white;
    @media screen and (max-width: 1200px) {
        font-size: 20px;
      }
    @media screen and (max-width: 375px) {
        font-size: 20px;
    }
`

const LineTitle = styled.div`
    display: flex;
    flex-direction: row;
`

const Tools = styled.div`
    margin-top: 20px;
    font-family: 'Raleway', Helvetica, sans-serif;
    font-size: 20px;
    color: grey;
    @media screen and (max-width: 1200px) {
        font-size: 10px;
      }
    @media screen and (max-width: 375px) {
        font-size: 10px;
    }
`

const MeLink = styled.div`
    font-family: 'Raleway', Helvetica, sans-serif;
    font-size: 50px;
    color: white;
    line-height: 70px;
    font-weight: bold;
    padding-left: 15px;
    cursor: pointer;
    text-decoration: none;
    transition: all ease-out 2s;
    @media screen and (max-width: 1200px) {
        font-size: 20px;
      }
    @media screen and (max-width: 375px) {
        font-size: 20px;
    }
    :hover{
        background-image: url(${Dawn});
        background-size: 100%;
        font-size: 80px;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        @media screen and (max-width: 1200px) {
            font-size: 60px;
          }
        @media screen and (max-width: 375px) {
            font-size: 60px;
        }
    }
`

const Link = styled.a`
    text-decoration: none;
`

const hello = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(30deg);
    }
    50% {
        transform: rotate(-10deg);
    }
    75% {
        transform: rotate(30deg);
    }
    100% {
        transform: rotate(0deg);
    }
`

const HandIcon = styled.div`
    width: 100px;
    margin: 0;
    cursor: pointer;
    :hover{
        animation: ${hello} 1s infinite;
        }
    }
`

function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <Helmet>
                <title>| {t("Home")}</title>
            </Helmet>
            <HomeWrapper>
                <HomeContainer>
                        <HomeTitle>{t("Welcome1")}<HandIcon>👋</HandIcon></HomeTitle>
                        <LineTitle>
                            <HomeTitle>{t("Welcome2")}</HomeTitle>
                            <Link href="/about"><MeLink>Arthur</MeLink></Link>
                        </LineTitle>
                        <HomeTitle>{t("Welcome3")}</HomeTitle>
                        <Tools>ReactJs &nbsp;/&nbsp; VueJs &nbsp;/&nbsp; Sass &nbsp;/&nbsp; NodeJs &nbsp;/&nbsp; Express</Tools>
                </HomeContainer>
            </HomeWrapper>
        </div>
    )
}

export default Home