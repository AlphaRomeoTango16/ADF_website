import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DawnGif from '../../assets/Dawn5.gif'
import { useTranslation } from 'react-i18next'

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.primary};
    height: 450px;
    align-items: center;
`

const HomeContainer = styled.div`
    margin: 70px;
    max-width: 1200px;
`

const HomeTitle = styled.h1`
    font-family: 'Anton', Helvetica, sans-serif;
    font-size: 90px;
    font-weight: bold;
    background-image: url(${DawnGif});
    background-size: contain;
    color: transparent;
    -moz-background-clip: text;
	-webkit-background-clip: text;
    line-height: 200px;
`

function Home() {
    const { t } = useTranslation();

    return (
        <HomeWrapper>
            <HomeContainer>
                <HomeTitle>{t("Welcome")}</HomeTitle>
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home