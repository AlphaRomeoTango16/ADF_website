import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const SelectButton = styled.div`
    display: flex;
    background-color: transparent;
    font-size: 15px;
`
const ButtonFr = styled.button`
    border-radius: 10px 0px 0px 10px;
    border-color: 1px solid black;
`

const ButtonEn = styled.button`
    border-radius: 0px 10px 10px 0px;
    border-color: 1px solid black;
`

function SwitchButton() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
            <SelectButton>
                <ButtonFr onClick={() => changeLanguage('fr')}>FR 🇫🇷</ButtonFr>
                <ButtonEn onClick={() => changeLanguage('en')}>EN 🇬🇧</ButtonEn>
            </SelectButton>
    )
}

export default SwitchButton