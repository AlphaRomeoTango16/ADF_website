import styled, { keyframes } from 'styled-components'
// import colors from '../../utils/style/colors'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { ThemeContext } from '../../utils/context'
import { useContext } from 'react'


const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const HomeWrapper = styled.div`
    display: flex;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
	animation: ${gradient} 20s linear infinite;
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
    color: ${({ isDarkMode }) =>
    isDarkMode ? 'white' : 'black'};
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
    color: black;
    font-weight: bold;
    @media screen and (max-width: 1200px) {
        font-size: 10px;
      }
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`

function Home() {
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <Helmet>
                <title>| {t("Home")}</title>
            </Helmet>
            <HomeWrapper>
                <HomeContainer>
                        <HomeTitle isDarkMode={theme === 'dark'}>{t("Welcome1")}</HomeTitle>
                        <LineTitle>
                            <HomeTitle isDarkMode={theme === 'dark'}>{t("Welcome2")}</HomeTitle>
                        </LineTitle>
                        <HomeTitle isDarkMode={theme === 'dark'}>{t("Welcome3")}</HomeTitle>
                        <Tools>ReactJs &nbsp;/&nbsp; VueJs &nbsp;/&nbsp; Sass &nbsp;/&nbsp; NodeJs &nbsp;/&nbsp; Express</Tools>
                </HomeContainer>
            </HomeWrapper>
        </div>
    )
}

export default Home