import styled from "styled-components"

const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.theme.footer.height};
    background-color: ${props => props.theme.footer.background};
    & span {
        color: ${props => props.theme.footer.title};
        font-size: 0.9rem;
    }
`

export const Footer = () => (
    <Container>
        <span>{`© Flix Desk ${(new Date()).getFullYear()}. Todos los derechos reservados.`}</span>
    </Container>
)