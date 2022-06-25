import React from 'react'
import cn from 'classnames'

type Props = React.HTMLAttributes<HTMLButtonElement> & {
	size?: 'giant' | 'large' | 'medium' | 'small' | 'tiny'
	color?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
	variant?: 'filled' | 'outline' | 'ghost'
	className?: string
}

export const Button: React.FC<Props> = (props) => {
	const { size = 'medium', color = 'basic', variant = 'filled', children, className, ...restProps } = props

	const classNames = cn(
		'font-bold',
		'uppercase',
		'text-base',
		'text-slate-900',
		'rounded',
		'transition',
		{
			// sizing
			'px-3.5 py-1.5 text-xs': size === 'tiny',
			'px-4 py-2 text-sm': size === 'small',
			'px-4 py-3': size === 'medium',
			'px-5 py-3.5 text-lg': size === 'large',
			'px-6 py-4 text-xl': size === 'giant',

			// filled
			'bg-gray-100 hover:bg-gray-200 active:bg-gray-300': color === 'basic' && variant === 'filled',
			'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700': color === 'primary' && variant === 'filled',
			'text-white bg-green-500 hover:bg-green-600 active:bg-green-700': color === 'success',
			'text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700': color === 'info',
			'text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700': color === 'warning',
			'text-white bg-red-500 hover:bg-red-600 active:bg-red-700': color === 'danger',

			// outline
			border: variant === 'outline',
			'border-gray-400 text-gray-400 bg-gray-400/[.08] hover:border-gray-500 hover:text-gray-500 hover:bg-gray-500/[.08] active:border-gray-600 active:text-gray-600 active:bg-gray-600/[.08]':
				color === 'basic' && variant === 'outline',
			'border-blue-400 text-blue-400 bg-blue-400/[.08] hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/[.08] active:border-blue-600 active:text-blue-600 active:bg-blue-600/[.08]':
				color === 'primary' && variant === 'outline',
			'border-green-400 text-green-400 bg-green-400/[.08] hover:border-green-500 hover:text-green-500 hover:bg-green-500/[.08] active:border-green-600 active:text-green-600 active:bg-green-600/[.08]':
				color === 'success' && variant === 'outline',
			'border-sky-400 text-sky-400 bg-sky-400/[.08] hover:border-sky-500 hover:text-sky-500 hover:bg-sky-500/[.08] active:border-sky-600 active:text-sky-600 active:bg-sky-600/[.08]':
				color === 'info' && variant === 'outline',
			'border-orange-400 text-orange-400 bg-orange-400/[.08] hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/[.08] active:border-orange-600 active:text-orange-600 active:bg-orange-600/[.08]':
				color === 'warning' && variant === 'outline',
			'border-red-400 text-red-400 bg-red-400/[.08] hover:border-red-500 hover:text-red-500 hover:bg-red-500/[.08] active:border-red-600 active:text-red-600 active:bg-red-600/[.08]':
				color === 'danger' && variant === 'outline',
		},
		className,
	)

	return (
		<button className={classNames} {...restProps}>
			{children}
		</button>
	)
}
