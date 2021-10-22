import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FormWrapper = styled.div`
    width: 100%;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary};
    border-radius: 10px;
    margin: 0;
    @media screen and (max-width: 1200px) {
        width: 270px;
    }
    @media screen and (max-width: 768px) {
        width: 270px;
  }
`

const FormTitle = styled.h2`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 25px;
    padding-top: 20px;
    padding-left: 20px;
    margin-top: 0;
    margin-bottom: 20px;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        padding-left: 0;
        display: flex;
        margin: auto;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding-left: 0;
        display: flex;
        margin: auto;
  }
`

const FirstContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
  }
`

const SecondContainer = styled.div`
    display: flex;
`

const LabelName = styled.label`
`

const InputName = styled.input`
width: 50%;
font-family: 'Montserrat', Helvetica, sans-serif;
height: 50px;
padding-left: 20px;
margin: 10px;
background: transparent;
border-top: none;
border-right: none;
border-left: none;
color: white;
@media screen and (max-width: 1200px) {
    width: 80%;
}
@media screen and (max-width: 768px) {
    width: 80%;
}
`

const LabelEmail = styled.label`
`

const InputEmail = styled.input`
font-family: 'Montserrat', Helvetica, sans-serif;
width: 50%;
height: 50px;
padding-left: 20px;
margin: 10px;
background: transparent;
border-top: none;
border-right: none;
border-left: none;
color: white;
@media screen and (max-width: 1200px) {
    width: 80%;
}
@media screen and (max-width: 768px) {
    width: 80%;
}
`

const LabelText = styled.label`
`

const TextArea = styled.textarea`
font-family: 'Montserrat', Helvetica, sans-serif;
width: 100%;
height: 100px;
padding-left: 20px;
padding-top: 20px;
margin: 10px;
`

const InputButton = styled.button`
display: inline-block;
margin: 10px;
position: relative;
height: 50px;
font-family: 'Montserrat', Helvetica, sans-serif;
font-size: 15px;
font-weight: bold;
cursor: pointer;
border: 1px solid white;
color: white;
background: transparent;
z-index: 0;
overflow: hidden;
transition: 0.08s ease-in;
:hover{
    color: black;
}
:before{
    content: '';
    position: absolute;
    background: white;
    bottom: 0;
    left: 0;
    top: 0;
    right: 100%;
    z-index: -1;
    transition: right .3s;
}
:hover:before{
    right: 0;
    color: black;
}
`

const EnvelopeIcon = styled(FontAwesomeIcon)`
    margin-left: 10px;
    ${InputButton}:hover & {
        display: none;
    }
`

const EnvelopeCloseIcon = styled(FontAwesomeIcon)`
    margin-left: 10px;
    display: none;
    ${InputButton}:hover & {
        display: inline-block;
    }
`


function Form() {
    const { t } = useTranslation();

    return (
        <FormWrapper>
            <FormContainer action="https://formspree.io/f/mvodybdl" method="POST">
                <FormTitle>{t("Meet")}</FormTitle>
                <FirstContainer>
                    <LabelName htmlFor="lname"/>
                    <InputName type="text" id="lname" name="Nom" placeholder={t("YourName")} required/>
                    <LabelEmail htmlFor="email"/>
                    <InputEmail type="text" id="email" name="Email" placeholder={t("YourEmail")} require/>
                </FirstContainer>
                <SecondContainer>
                    <LabelText htmlFor="message"/>
                    <TextArea type="text" id="message" name="Message" placeholder={t("YourMessage")} required/>
                </SecondContainer>
                <InputButton type="submit" value={t("Send")}>{t("Send")}<EnvelopeIcon icon={['fas', 'envelope-open-text']} /><EnvelopeCloseIcon icon={['fas', 'envelope']} /></InputButton>
            </FormContainer>
        </FormWrapper>
    )
}

export default Form