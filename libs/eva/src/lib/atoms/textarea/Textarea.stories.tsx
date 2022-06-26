import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Textarea } from './Textarea'

export default {
	component: Textarea,
	title: 'Atoms/Textarea',
	argTypes: {
		placeholder: {
			control: 'text',
			defaultValue: 'Placeholder',
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
	},
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />

export const Default = Template.bind({})
