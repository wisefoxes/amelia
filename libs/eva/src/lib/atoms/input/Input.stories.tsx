import React from 'react'
import { Meta } from '@storybook/react'
import { Input } from './Input'

export default {
	component: Input,
	title: 'Atoms/Input',
} as Meta

export const Default: React.FC = () => <Input />
