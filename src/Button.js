import theme from './shared/Theme'
import styled, { css } from 'styled-components'

const ButtonBase = css`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  border: 2px solid;
`

export const Button = styled.button`
  ${ButtonBase}
  color: #ffff;
  background-color:${props => theme[props.theme] || theme.primary};
  border-color: ${props => theme[props.theme] || theme.primary};
`

export const ButtonLight = styled.button`
  ${ButtonBase}
  color: ${props => theme[props.theme] || theme.primary};
  border-color: ${props => theme[props.theme] || theme.primary};
`

export const ButtonBlock = styled.button`
  ${ButtonBase}
   width:100%;
  display: block;
  color: ${props => theme[props.theme] || theme.primary};
  border-color: ${props => theme[props.theme] || theme.primary};
`

