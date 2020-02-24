//@ts-nocheck
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button, DarkenMixing } from '../src/Button';
import theme from '../src/shared/Theme';

test('Renders with the default primary color', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', theme.primary);
});

test('changes the css props base on the theme ', () => {
  const tree = renderer.create(<Button theme={'secondary'} />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', theme.secondary);
  expect(tree).toHaveStyleRule('border-color', theme.secondary);
});

test('changes the color on hover', () => {
  const tree = renderer.create(<Button />).toJSON();
  const darken = DarkenMixing('primary');
  expect(darken).toBe('#001bf4');
  expect(tree).toHaveStyleRule('border-color', '#001bf4', {
    modifier: ':hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#001bf4', {
    modifier: ':hover',
  });
});
