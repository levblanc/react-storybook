import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from "@storybook/addon-knobs/react";
import { Button } from './Button';

(storiesOf('Button', module) as any)
  .addWithJSX(
    'tsx button', () => (
      <Button 
        label={text('label', 'Hello World')}
        onClick={() => alert('hi there')}
        disabled={boolean('disabled', false)}
      >
      </Button>
    ),
    { info: { text: `component description` } }
  );
