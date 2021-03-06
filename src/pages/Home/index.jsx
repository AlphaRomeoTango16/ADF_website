import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const HomeWrapper = styled.div`
    display: flex;
    background-color: ${colors.primary};
    align-items: center;
    height: 60vh;
    @media screen and (max-width: 1200px) {
        height: 50vh;
      }
    @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 768px) {
        font-size: 10px;
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
                        </LineTitle>
                        <HomeTitle>{t("Welcome3")}</HomeTitle>
                        <Tools>ReactJs &nbsp;/&nbsp; VueJs &nbsp;/&nbsp; Sass &nbsp;/&nbsp; NodeJs &nbsp;/&nbsp; Express</Tools>
                </HomeContainer>
            </HomeWrapper>
        </div>
    )
}

export default Home