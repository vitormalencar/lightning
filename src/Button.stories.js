import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { ButtonLight, Button, ButtonBlock, ButtonBlockLight } from "./Button";
import theme from "./shared/Theme";

let stories = storiesOf("Buttons", module);

const variants = Object.keys(theme);

stories.add("Button", () => {
  return <div>{variants.map(i => <Button theme={i}>Button {i}</Button>)}</div>;
});

stories.add("Button light", () => {
  return (
    <div>
      {variants.map(i => <ButtonLight theme={i}>Button {i}</ButtonLight>)}
    </div>
  );
});

stories.add("Button block", () => {
  return (
    <div>
      {variants.map(i => <ButtonBlock theme={i}>Button {i}</ButtonBlock>)}
    </div>
  );
});

stories.add("Button block light", () => {
  return (
    <div>
      {variants.map(i => (
        <ButtonBlockLight theme={i}>Button {i}</ButtonBlockLight>
      ))}
    </div>
  );
});
