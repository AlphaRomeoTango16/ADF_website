import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTranslation } from 'react-i18next'

const FormWrapper = styled.div`
    width: 100%;
`

const FormContainer = styled.form`
    box-shadow: 5px 5px 15px 5px #000000;   
    width: 800px;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary};
    border-radius: 10px;
    margin: 0;
`

const FormTitle = styled.h2`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 300;
    font-size: 25px;
    padding-top: 20px;
    padding-left: 20px;
    margin-top: 0;
    margin-bottom: 20px;
`

const FirstContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const SecondContainer = styled.div`
    display: flex;
`

const LabelName = styled.label`
`

const InputName = styled.input`
width: 50%;
height: 50px;
padding-left: 20px;
`

const LabelEmail = styled.label`
`

const InputEmail = styled.input`
width: 50%;
height: 50px;
padding-left: 20px;
`

const LabelText = styled.label`
`

const TextArea = styled.textarea`
width: 100%;
height: 100px;
padding-left: 20px;
padding-top: 20px;
`

const InputButton = styled.input`
height: 50px;
font-size: 15px;
font-weight: bold;
cursor: pointer;
border-radius: 0px 0px 10px 10px;
border: 1px solid black;
:hover{
    background-color: black;
    border: 1px solid white;
    color: white;
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
                    <InputName type="text" id="lname" name="Nom" placeholder={t("YourName")}/>
                    <LabelEmail htmlFor="email"/>
                    <InputEmail type="text" id="email" name="Email" placeholder={t("YourEmail")}/>
                </FirstContainer>
                <SecondContainer>
                    <LabelText htmlFor="message"/>
                    <TextArea type="text" id="message" name="Message" placeholder={t("YourMessage")}/>
                </SecondContainer>
                <InputButton type="submit" value={t("Send")}></InputButton>
            </FormContainer>
        </FormWrapper>
    )
}

export default Form