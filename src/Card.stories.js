import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card, CardHeader, CardContent, CardImage, Container } from './Card'
import { ButtonBlock } from './Button'

let stories = storiesOf('Card', module)

const dummyText = `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`

stories.add('Card', () => (
  <Card>
    <CardContent>{dummyText}</CardContent>
  </Card>
))

stories.add('Card with Header', () => (
  <Card>
    <CardHeader>Header</CardHeader>
    <CardContent>{dummyText}</CardContent>
  </Card>
))

stories.add('Card with Image', () => (
  <Container>
    <Card>
      <CardImage src="https://picsum.photos/640/360" />
      <CardHeader>Header</CardHeader>
      <CardContent>{dummyText}</CardContent>
    </Card>
  </Container>
))
