//@ts-nocheck
import theme  from './shared/Theme';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const ButtonBase: any = css`
  font-size: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  border: 2px solid;
`;

export const BlockBase = css`
  width: 100%;
  display: block;
`;
export const DarkenMixing = darkerColor => darken(0.2, theme[darkerColor]);
export const ThemeMixing = currentTheme => theme[currentTheme];

export const Button = styled.button`
  ${ButtonBase};
  color: #ffff;
  background-color: ${props => ThemeMixing(props.theme)};
  border-color: ${props => ThemeMixing(props.theme)};
  :hover {
    background-color: ${props => DarkenMixing(props.theme)};
    border-color: ${props => DarkenMixing(props.theme)};
  }
`;

Button.defaultProps = {
  theme: 'primary',
};

export const ButtonLight = styled.button`
  ${ButtonBase};
  color: ${props => ThemeMixing(props.theme)};
  border-color: ${props => ThemeMixing(props.theme)};
  :hover {
    color: #ffff;
    background-color: ${props => DarkenMixing(props.theme)};
    border-color: ${props => DarkenMixing(props.theme)};
  }
`;

ButtonLight.defaultProps = {
  theme: 'primary',
};

export const ButtonBlock = styled(Button)`
  ${BlockBase};
`;

export const ButtonBlockLight = styled(ButtonLight)`
  ${BlockBase};
`;
