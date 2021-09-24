import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors';

export const StyledLink = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    color: #00000;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white;
        border-radius: 30px;
        background-color: ${colors.primay}`}
`