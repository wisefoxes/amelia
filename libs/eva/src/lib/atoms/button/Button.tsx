import React from 'react'
import cn from 'classnames'

type Props = React.HTMLAttributes<HTMLButtonElement> & {
	size?: 'giant' | 'large' | 'medium' | 'small' | 'tiny'
}

export const Button: React.FC<Props> = (props) => {
	const { size = 'medium', children, ...restProps } = props

	const classNames = cn({ 'h-10': size === 'medium' })

	return (
		<button className={classNames} {...restProps}>
			{children}
		</button>
	)
}
