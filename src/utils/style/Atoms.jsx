import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors';

export const StyledLink = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    font-size: 18px;
    ::after {
        content: '';
        width: 0px;
        height: 1px;
        display: block;
        background: black;
        transition: 300ms;
      }
    }
    :hover::after {
        width: 100%;
    }
    :link{
        color: ${colors.primary};
    }
    :visited{
        color: ${colors.primary};
    }
    ${(props) =>
        props.$isFullLink &&
        `color: white;
        border-radius: 30px;
        background-color: ${colors.primay}`}
`