import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Form from '../../components/Form'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.primary};
  height: 450px;
  align-items: center;
`

const ContactContainer = styled.div`
  font-size: 50px;
  font-family: 'Avenir', Helvetica, sans-serif;
  font-weight: bold;
  color: ${colors.secondary};
`

function Contact() {
    return (
        <ContactWrapper>
            <ContactContainer>
                <Form />
            </ContactContainer>
        </ContactWrapper>
    )
}

export default Contact