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
        transition: 300ms;
      }
    }
    :hover::after {
        width: 100%;
    }
    @media screen and (max-width: 1200px) {
      font-size: 20px;
      margin-bottom: 20px;
      }
    @media screen and (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 20px;
    }
`

export default StyledLink