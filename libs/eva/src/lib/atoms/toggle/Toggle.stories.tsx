import React from 'react';
import { Meta } from '@storybook/react';
import { Toggle } from './Toggle';

export default {
  component: Toggle,
  title: 'Atoms/Toggle',
} as Meta;

export const Default: React.FC = () => <Toggle />;
