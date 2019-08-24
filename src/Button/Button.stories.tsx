import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button } from './Button';

const stories = storiesOf('Button', module);

stories.add(
  'Default',
  withInfo({
    inline: true,
    text: 'A Button',
  })(() => <Button>{text('Text', 'click me')}</Button>)
);
