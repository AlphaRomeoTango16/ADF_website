import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import Dawn from '../../assets/Dawn5.gif'

const HomeWrapper = styled.div`
    display: flex;
    background-color: ${colors.primary};
    align-items: center;
    height: 60vh;
`

const HomeContainer = styled.div`
    margin: 70px;
    display: flex;
    flex-direction: column;
`

const HomeTitle = styled.div`
    font-family: 'Raleway', Helvetica, sans-serif;
    margin: 0;
    font-size: 50px;
    line-height: 70px;
    font-weight: bold;
    color: white;
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
    :hover{
        background-image: url(${Dawn});
        background-size: 100%;
        color: transparent;
        -moz-background-clip: text;
        -webkit-background-clip: text;
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
                        <HomeTitle>{t("Welcome1")}</HomeTitle>
                        <LineTitle>
                            <HomeTitle>{t("Welcome2")}</HomeTitle>
                            <MeLink href="/about">Arthur</MeLink>
                        </LineTitle>
                        <HomeTitle>{t("Welcome3")}</HomeTitle>
                        <Tools>ReactJs &nbsp;/&nbsp; VueJs &nbsp;/&nbsp; Sass &nbsp;/&nbsp; NodeJs &nbsp;/&nbsp; Express</Tools>
                </HomeContainer>
            </HomeWrapper>
        </div>
    )
}

export default Home