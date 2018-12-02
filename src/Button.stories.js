import React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { ButtonLight, Button, ButtonBlock, ButtonBlockLight } from './Button'
import theme from './shared/Theme'

let stories = storiesOf('Buttons', module)

const variants = Object.keys(theme)

const Spacer = styled.div`
  margin: 1rem;
`

stories.add('Button', () => {
  return (
    <div>
      {variants.map(i => (
        <Spacer>
          <Button theme={i}>Button {i}</Button>
        </Spacer>
      ))}
    </div>
  )
})

stories.add('Button light', () => {
  return (
    <div>
      {variants.map(i => (
        <Spacer>
          <ButtonLight theme={i}>Button {i}</ButtonLight>
        </Spacer>
      ))}
    </div>
  )
})

stories.add('Button block', () => {
  return (
    <div>
      {variants.map(i => (
        <Spacer>
          <ButtonBlock theme={i}>Button {i}</ButtonBlock>
        </Spacer>
      ))}
    </div>
  )
})

stories.add('Button block light', () => {
  return (
    <div>
      {variants.map(i => (
        <Spacer>
          <ButtonBlockLight theme={i}>Button {i}</ButtonBlockLight>
        </Spacer>
      ))}
    </div>
  )
})
