import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardWrapper = styled.div`
    display: flex;
    width: 250px;
    height: 200px;
    border-radius: 20px;
    margin: 20px;
    background-color: ${colors.secondary}
`

function card() {
    return (
        <CardWrapper>

        </CardWrapper>
    )
}

export default card