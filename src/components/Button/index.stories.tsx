import { storiesOf } from '@storybook/react';
import React from 'react';
// import { linkTo } from "@storybook/addon-links";
import Button from '.';

// import { Welcome } from "@storybook/react/demo";
// storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("RoundedButton")} />);

storiesOf('Button', module).add(
  'barebone',
  () => <Button color="blue">Hello Button</Button>,
  { info: { inline: true } }
);
