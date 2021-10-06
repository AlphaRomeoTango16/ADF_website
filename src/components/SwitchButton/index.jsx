import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const SelectButton = styled.div`
    display: flex;
    font-size: 15px;
`
const ButtonFr = styled.button`
    border-radius: 10px 0px 0px 10px;
    background-color: transparent;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    :hover{
        background-color: black;
        color: white;
    }
`

const ButtonEn = styled.button`
    border-radius: 0px 10px 10px 0px;
    background-color: transparent;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    :hover{
        background-color: black;
        color: white;
    }
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