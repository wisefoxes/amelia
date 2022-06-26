import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from './Input'

export default {
	component: Input,
	title: 'Atoms/Input',
	argTypes: {
		placeholder: {
			control: 'text',
			defaultValue: 'Placeholder',
		},
		type: {
			control: 'select',
			options: ['text', 'password'],
			defaultValue: 'text',
		},
	},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
