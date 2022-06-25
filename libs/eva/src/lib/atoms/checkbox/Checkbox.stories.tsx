import React from 'react';
import { Meta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Atoms/Checkbox',
} as Meta;

export const Default: React.FC = () => <Checkbox />;
