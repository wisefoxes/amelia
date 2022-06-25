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
		kind: {
			control: 'select',
			options: ['basic', 'primary', 'success', 'info', 'warning', 'danger'],
			defaultValue: 'basic',
		},
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Filled = Template.bind({})

Filled.args = {
	children: 'Button',
}
