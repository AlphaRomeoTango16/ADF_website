import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
`