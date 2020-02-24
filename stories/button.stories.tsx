import React from 'react';

import theme from '../src/shared/Theme';
import styled from 'styled-components';

import {
  Button,
  ButtonLight,
  ButtonBlock,
  ButtonBlockLight,
} from '../src/Button';

export default {
  title: 'Buttons',
};

const variants = Object.keys(theme);

const Spacer = styled.div`
  margin: 1rem;
`;

export const Normal = () => (
  <div>
    {variants.map(i => (
      <Spacer>
        <Button theme={i}>Button {i}</Button>
      </Spacer>
    ))}
  </div>
);

export const Light = () => (
  <div>
    {variants.map(i => (
      <Spacer>
        <ButtonLight theme={i}>Button {i}</ButtonLight>
      </Spacer>
    ))}
  </div>
);

export const Block = () => (
  <div>
    {variants.map(i => (
      <Spacer>
        <ButtonBlock theme={i}>Button {i}</ButtonBlock>
      </Spacer>
    ))}
  </div>
);

export const BlockLight = () => (
  <div>
    {variants.map(i => (
      <Spacer>
        <ButtonBlockLight theme={i}>Button {i}</ButtonBlockLight>
      </Spacer>
    ))}
  </div>
);

Normal.story = { name: 'Button' };
Light.story = { name: 'Button Light' };
Block.story = { name: 'Button Block' };
BlockLight.story = { name: 'Button Light Block' };
