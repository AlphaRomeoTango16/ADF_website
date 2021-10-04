import styled from 'styled-components'
// import French from '../../assets/French_flag.png'
// import English from '../../assets/English_flag.png'

const SwitchWrapper = styled.div`
    position: relative;
`

const SwitchLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 26px;
    background: #e3e3e3;
    border-radius: 15px;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: white;
        box-shadow: 1px 3px 3px 1 px;
        transition: 0.2s;
    }
`

const SwitchInput = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${SwitchLabel} {
        background: #e3e3e3;
        &::after {
            content: "";
            dispaly: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`

function SwitchButton() {
    
    return (
        <SwitchWrapper>
            <SwitchInput id="checkbox" type="checkbox" />
            <SwitchLabel htmlFor="checkbox"/>
        </SwitchWrapper>
    )
}

export default SwitchButton