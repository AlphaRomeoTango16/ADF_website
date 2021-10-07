import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import DawnGif from '../../assets/Dawn5.gif'
import Afterburner from '../../assets/Afterburner.gif'
import Flyby from '../../assets/Flyby.gif'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${colors.primary};
    height: 450px;
    align-items: center;
`

const HomeContainer = styled.div`
    margin: 70px;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
`

const HomeTitle = styled.div`
    font-family: 'Anton', Helvetica, sans-serif;
    margin: 0;
    font-size: 80px;
    font-weight: bold;
    background-image: url(${Flyby});
    background-size: contain;
    color: transparent;
    -moz-background-clip: text;
	-webkit-background-clip: text;
    line-height: 130px;
`

const HomeTitle2 = styled.div`
    font-family: 'Anton', Helvetica, sans-serif;
    margin: 0;
    font-size: 80px;
    font-weight: bold;
    background-image: url(${Afterburner});
    margin-left: 20px;
    background-size: contain;
    color: transparent;
    -moz-background-clip: text;
	-webkit-background-clip: text;
    line-height: 200px;
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
                        <HomeTitle>{t("Welcome")}</HomeTitle>
                        <HomeTitle2>{t("Welcome")}</HomeTitle2>
                </HomeContainer>
            </HomeWrapper>
        </div>
    )
}

export default Home