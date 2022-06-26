import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Checkbox } from './Checkbox'

export default {
	component: Checkbox,
	title: 'Atoms/Checkbox',
	argTypes: {
		color: {
			control: 'select',
			options: ['basic', 'primary', 'success', 'info', 'warning', 'danger'],
			defaultValue: 'basic',
		},
		checked: {
			control: 'boolean',
			defaultValue: false,
		},
		disabled: {
			control: 'boolean',
			defaultValue: false,
		},
	},
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args}>Checkbox label</Checkbox>

export const Default = Template.bind({})
Default.args = {}
