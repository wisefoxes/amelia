import React from 'react';
import { Meta } from '@storybook/react';
import { Radio } from './Radio';

export default {
  component: Radio,
  title: 'Atoms/Radio',
} as Meta;

export const Default: React.FC = () => <Radio />;
