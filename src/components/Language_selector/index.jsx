import React, { useContext } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import French from '../../assets/French_flag.png'
// import English from '../../assets/English_flag.png'
import {IoChevronDownCircleOutline} from 'react-icons/io5'
import { useState } from 'react'
import { languageOptions } from '../../languages'
import { LanguageContext } from '../../utils/context'
import { Text } from '../../utils/context'

const LanguageButton = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 30px;
    padding: 3px 10px 3px 10px;
    font-family: 'Heiti SC', Helvetica, sans-serif;
    font-size: 18px;
    justify-content: space-between;
    border: 1px solid #ededed;
    border-radius: 5px;
    cursor: pointer;
    color: ${colors.primary};
    :hover{
        border-radius: 5px;
        background-color: black;
        border: 1px solid black;
        color: ${colors.secondary}
    }
`

const Span = styled.span`
    padding-left: 10px;
`

const DropdownMenu = styled.div`
    position: relative;
`

const LanguageMenu = styled.nav`
    background: #ffffff;
    top: 30px;
    position: absolute;
    width: 120px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
`

const LanguageList = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0;
`

const LanguageItem = styled.li`
    border-bottom: 1px solid #dddddd;
    height: 20px;
    padding-top: 5px;
    :hover {
        background-color: #e3e3e3;
    }
`

const LanguageSwitch= styled.button`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    bodrder: none;
    font-size: 13px;
    color: #333333;
    width: 100%;
`

// const Flag = styled.img`
//     height: 10px;
//     padding-right: 10px;
//     padding-left: 10px;
// `

function LanguageSelector() {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext)
    const handleLanguageChange = e => userLanguageChange(e.target.value)
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    return(
            <DropdownMenu>
            <LanguageButton onClick={toggling} value={userLanguage}s className="menu-trigger"><Text tid="Languages" /><Span><IoChevronDownCircleOutline /></Span></LanguageButton>
            {isOpen && (
            <LanguageMenu>
                <LanguageList>
                    {Object.entries(languageOptions).map(([id, name]) => (
                        <LanguageItem><LanguageSwitch onClick={handleLanguageChange} key={id} value={id}>{name}</LanguageSwitch></LanguageItem>
                    ))}
                    {/* <LanguageItem><LanguageLink href="/french">Français<Flag src={French}/></LanguageLink></LanguageItem>
                    <LanguageItem><LanguageLink href="/english">Anglais<Flag src={English}/></LanguageLink></LanguageItem> */}
                </LanguageList>
            </LanguageMenu>
            )}
        </DropdownMenu>

        // <select
        // onChange={handleLanguageChange}
        // value={userLanguage}
        // >
        //     {Object.entries(languageOptions).map(([id, name]) => (
        //         <option key={id} value={id}>{name}</option>
        //     ))}
        // </select>
    )
}

export default LanguageSelector