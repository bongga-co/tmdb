import styled from "styled-components";
import { Flex } from '@rebass/grid'
import { APP_NAME } from 'utils/constants'

const Container = styled.header`
    display: flex;
    align-items: center;
    height: ${props => props.theme.header.height};
    background-color: ${props => props.theme.header.background};
    box-shadow: ${props => props.theme.header.shadow};
    & h1 {
        color: ${props => props.theme.header.title};
        font-size: 1.8rem;
    }
`

export const Header = () => (
    <Container>
        <Flex width={1} justifyContent='center'>
            <h1>{APP_NAME}</h1>
        </Flex>
    </Container>
)