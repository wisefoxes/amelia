import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './Button'

export default {
	component: Button,
	title: 'Atoms/Button',
	argTypes: {
		size: {
			control: 'select',
			options: ['giant', 'large', 'medium', 'small', 'tiny'],
			defaultValue: 'medium',
		},
		color: {
			control: 'select',
			options: ['basic', 'primary', 'success', 'info', 'warning', 'danger'],
			defaultValue: 'basic',
		},
		children: {
			control: 'text',
			defaultValue: 'Button',
		},
		variant: {
			table: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Filled = Template.bind({})
Filled.args = {
	variant: 'filled',
}

export const Outline = Template.bind({})
Outline.args = {
	variant: 'outline',
}

export const Ghost = Template.bind({})
Ghost.args = {
	variant: 'ghost',
}
