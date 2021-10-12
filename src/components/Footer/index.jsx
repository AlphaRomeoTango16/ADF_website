import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../utils/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useTranslation } from 'react-i18next'


const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    margin-top: auto;
`

const CopyrightLine = styled.div`
    font-family: 'Heiti SC', Helvetica, sans-serif;
    padding-bottom: 20px;
    font-size: 10px;
`

const LogoContainer = styled.div`
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 70px;
`

const LabelSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    margin-bottom: 20px;
`

const SliderSwitch = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background-color: #b5b5b5;
    box-shadow: inset 0px 0px 5px 2px #595959;
    -webkit-transition: .4s;
    transition: .4s;
    :before{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'black' : 'white'};
        font-size: 15px;
        font-family: "Font Awesome 5 Free";
        font-weight: 500;
        content: attr(data-fa-icon);
        color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        box-shadow: 0px 0px 2px 2px #595959;
        height: 21px;
        width: 20px;
        left: 2px;
        bottom: 2px;
        border-radius: 20px;
        -webkit-transition: .4s;
        transition: .4s;
    }
`

const InputSwitch = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${SliderSwitch}{
        &::before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px) rotate(1turn);
        }
    }
`

const IconMe = styled.a`
    transition: all 0.5s;
    &:hover{
        transform: translateY(-5px);
    }
`

const styleIcon = { fontSize: "2em", textShadow: "2px 2px 2px #CE5937" }

function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext)
    // const { t } = useTranslation();

    return (
        <FooterContainer>
            <LabelSwitch onChange={() => toggleTheme()}>
                <InputSwitch type="checkbox" />
                <SliderSwitch isDarkMode={theme === 'dark'}  data-fa-icon={theme === 'light' ? "" : ""}></SliderSwitch>
            </LabelSwitch>
            <LogoContainer>
                <IconMe href="https://www.linkedin.com/in/arthur-della-faille-46a2815a/"><FontAwesomeIcon icon={['fab', 'linkedin']} style={styleIcon} title="LinkedIn"/></IconMe>
                <IconMe href="https://github.com/AlphaRomeoTango16"><FontAwesomeIcon icon={['fab', 'github']} style={styleIcon} title="GitHub"/></IconMe>
            </LogoContainer>
            <CopyrightLine>Copyright ©2021 | All rights reserved, Arthur della Faille.</CopyrightLine>
        </FooterContainer>
    )
}

export default Footer