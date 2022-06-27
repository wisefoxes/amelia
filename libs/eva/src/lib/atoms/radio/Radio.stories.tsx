import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Radio } from './Radio'

export default {
	component: Radio,
	title: 'Atoms/Radio',
	argTypes: {
		children: {
			control: 'text',
			defaultValue: 'Radio',
		},
		color: {
			control: 'select',
			options: ['basic', 'primary', 'success', 'info', 'warning', 'danger'],
			defaultValue: 'basic',
		},
		disabled: {
			control: 'boolean',
			defaultValue: false,
		},
		checked: {
			control: 'boolean',
			defaultValue: false,
		},
	},
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Default = Template.bind({})
