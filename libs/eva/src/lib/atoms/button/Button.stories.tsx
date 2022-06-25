import { Meta } from '@storybook/react'
import React from 'react'
import { Button } from './Button'

export default {
	component: Button,
	title: 'Atoms/Button',
} as Meta

export const Default: React.FC = () => <Button>Button</Button>
