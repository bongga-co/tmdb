import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

const inCss = `
  @-webkit-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }
  @-moz-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }
  @-ms-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }
`

const outCss = `
  @-webkit-keyframes react-fade-out {
    0%   { opacity: 1; }
    50%  { opacity: 1; }
    100% { opacity: 0; }
  }
  @-moz-keyframes react-fade-out {
    0%   { opacity: 1; }
    50%  { opacity: 1; }
    100% { opacity: 0; }
  }
  @-ms-keyframes react-fade-out {
    0%   { opacity: 1; }
    50%  { opacity: 1; }
    100% { opacity: 0; }
  }
  @keyframes react-fade-out {
    0%   { opacity: 1; }
    50%  { opacity: 1; }
    100% { opacity: 0; }
  }
`

export const Fade = styled(Box)`
  position: ${props => props.position};
  animation-duration: ${props => props.duration}s;
  animation-iteration-count: 1;
  animation-name: react-fade-${props => (props.out ? 'out' : 'in')};
  animation-timing-function: ${props => props.out ? 'ease-out' : 'ease-in'};

  ${props => props.out ? outCss : inCss}
`

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number.isRequired,
  position: PropTypes.string,
  out: PropTypes.bool
}

Fade.defaultProps = {
  duration: 1.5,
  out: false
}
