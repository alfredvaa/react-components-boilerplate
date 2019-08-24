import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Input } from './Input';

const stories = storiesOf('Input', module);

stories.add(
  'Default',
  withInfo({
    inline: true,
    text: 'A Input field',
  })(() => <Input value={text('Value', 'text...')} type="text" />)
);
