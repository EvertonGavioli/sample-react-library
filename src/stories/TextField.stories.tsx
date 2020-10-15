import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextField, TextFieldProps } from '../TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  decorators: [withKnobs],
} as Meta;

const Template: Story<TextFieldProps> = (args: TextFieldProps) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Digite aqui',
};
