import React from 'react'
import cn from 'classnames'

type Props = React.HTMLAttributes<HTMLButtonElement> & {
	size?: 'giant' | 'large' | 'medium' | 'small' | 'tiny'
	kind?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
}

export const Button: React.FC<Props> = (props) => {
	const { size = 'medium', kind = 'basic', children, ...restProps } = props

	const classNames = cn('font-bold', 'uppercase', 'text-base', 'text-slate-900', 'rounded', 'transition', {
		// sizing
		'px-3.5 py-1.5 text-xs': size === 'tiny',
		'px-4 py-2 text-sm': size === 'small',
		'px-4 py-3': size === 'medium',
		'px-5 py-3.5 text-lg': size === 'large',
		'px-6 py-4 text-xl': size === 'giant',

		// kind
		'bg-gray-100 hover:bg-gray-200 active:bg-gray-300': kind === 'basic',
		'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700': kind === 'primary',
		'text-white bg-green-500 hover:bg-green-600 active:bg-green-700': kind === 'success',
		'text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700': kind === 'info',
		'text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700': kind === 'warning',
		'text-white bg-red-500 hover:bg-red-600 active:bg-red-700': kind === 'danger',
	})

	return (
		<button className={classNames} {...restProps}>
			{children}
		</button>
	)
}
