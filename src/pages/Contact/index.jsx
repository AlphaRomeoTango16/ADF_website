import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.primary};
  height: 450px;
`

const ContactContainer = styled.div`
  margin: 70px;
  width: 1200px;
  background-color: ${colors.secondary};
  box-shadow: 5px 5px 10px 1px ${colors.secondary};
  color: black;
  font-size: 50px;
  font-family: 'Avenir', Helvetica, sans-serif;
  font-weight: bold;
`

function Contact() {
    return (
        <ContactWrapper>
            <ContactContainer>
                Contact
            </ContactContainer>
        </ContactWrapper>
    )
}

export default Contact