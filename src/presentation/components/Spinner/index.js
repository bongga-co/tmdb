import styled, { withTheme } from 'styled-components'
import ReactLoading from 'react-loading'
import PropTypes from 'prop-types'

const Container = styled.div`
    position: absolute;
    top: 20%;
    left: calc(50% - 20px);
    & svg {
        fill: ${props => props.theme.spinner.color};
        width: 40px;
        height:40px;
    }
`

export const Spinner = withTheme(({ type, show, theme }) => {
  if(!show) return null;

  return (
    <Container>
        <ReactLoading type={type} />
    </Container>
  )
})

Spinner.propTypes = {
  type: PropTypes.string,
}

Spinner.defaultProps = {
  type: 'spin'
}
