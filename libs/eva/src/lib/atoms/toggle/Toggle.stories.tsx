import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Toggle } from './Toggle'

export default {
	component: Toggle,
	title: 'Atoms/Toggle',
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
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const Default = Template.bind({})
