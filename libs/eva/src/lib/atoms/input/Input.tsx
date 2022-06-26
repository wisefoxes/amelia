import React from 'react'
import cn from 'classnames'

type Props = React.HTMLAttributes<HTMLInputElement> & {
	className?: string
	type?: 'text' | 'password'
	color?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
	size?: 'small' | 'medium' | 'large'
	disabled?: boolean
}

export const Input: React.FC<Props> = (props) => {
	const { color = 'basic', size = 'medium', className = '', ...restProps } = props
	const classNames = cn(
		'border rounded outline-none border-basic-400 leading-5 transition font-semibold text-basic-800 bg-basic-200 placeholder-basic-600 placeholder:font-normal placeholder:text-ellipsis disabled:border-basic-400 disabled:bg-basic-200 disabled:text-basic-600/[.48] disabled:placeholder-basic-600/[.48] disabled:cursor-not-allowed',
		{
			'px-4 py-0.5 text-sm': size === 'small',
			'px-4 py-2 text-base': size === 'medium',
			'px-6 py-3 text-base': size === 'large',

			'hover:bg-basic focus:bg-basic-100 focus:border-primary focus:hover:bg-basic focus:hover:border-basic-400':
				color === 'basic',
			'border-primary hover:border-primary-400 focus:border-primary-700 focus:hover:border-primary-400':
				color === 'primary',
			'border-success hover:border-success-400 focus:border-success-700 focus:hover:border-success-400':
				color === 'success',
			'border-info hover:border-info-400 focus:border-info-700 focus:hover:border-info-400': color === 'info',
			'border-warning hover:border-warning-400 focus:border-warning-700 focus:hover:border-warning-400':
				color === 'warning',
			'border-danger hover:border-danger-400 focus:border-danger-700 focus:hover:border-danger-400': color === 'danger',
		},
		className,
	)

	return <input className={classNames} {...restProps} />
}
