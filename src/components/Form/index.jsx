import styled from 'styled-components'
import colors from '../../utils/style/colors'

const FormWrapper = styled.div`
    width: 100%;
`

const FormContainer = styled.form`
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary};
    border: 1px solid ${colors.secondary};
    border-radius: 10px;
    padding: 20px;
    margin: 0;
`

const FormTitle = styled.h2`
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-weight: 300;
    font-size: 25px;
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
`

const LabelEmail = styled.label`
`

const InputEmail = styled.input`
`

const LabelText = styled.label`
`

const TextArea = styled.textarea`
`

const InputButton = styled.input`
`

function Form() {
    return (
        <FormWrapper>
            <FormContainer action="form.php" method="POST">
                <FormTitle>Rencontrons-nous</FormTitle>
                <FirstContainer>
                    <LabelName htmlFor="lname"/>
                    <InputName type="text" id="lname" name="Nom" placeholder="Votre nom"/>
                    <LabelEmail htmlFor="email"/>
                    <InputEmail type="text" id="email" name="Email" placeholder="Votre e-mail"/>
                </FirstContainer>
                <SecondContainer>
                    <LabelText htmlFor="message"/>
                    <TextArea type="text" id="message" name="Message" placeholder="Votre message"/>
                </SecondContainer>
                <InputButton type="submit" value="Envoyer"></InputButton>
            </FormContainer>
        </FormWrapper>
    )
}

export default Form