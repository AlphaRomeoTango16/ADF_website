import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Form from '../../components/Form'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

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
  const { t } = useTranslation();

    return (
      <div>
        <Helmet>
          <title>| {t("Contact")}</title>
        </Helmet>
        <ContactWrapper>
            <ContactContainer>
                <Form />
            </ContactContainer>
        </ContactWrapper>
      </div>
    )
}

export default Contact