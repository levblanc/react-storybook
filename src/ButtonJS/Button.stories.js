import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from "@storybook/addon-knobs/react";
import { Button } from './Button';

storiesOf('Button', module)
  .addWithJSX(
    'js button', 
    () => <Button bg={text('bg', "green")}>Hello World</Button>,
    { info: { text: `component description` } }
  );
