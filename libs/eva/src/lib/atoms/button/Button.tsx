import React from 'react'
import cn from 'classnames'

type Props = React.HTMLAttributes<HTMLButtonElement> & {
	size?: 'giant' | 'large' | 'medium' | 'small' | 'tiny'
	color?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
	variant?: 'filled' | 'outline' | 'ghost'
	className?: string
	disabled?: boolean
}

export const Button: React.FC<Props> = (props) => {
	const { size = 'medium', color = 'basic', variant = 'filled', className, children, ...restProps } = props

	const classNames = cn(
		'font-bold',
		'uppercase',
		'text-base',
		'text-slate-900',
		'rounded',
		'border',
		'transition',
		'outline-none',
		'focus:shadow-btn-outer',
		'disabled:bg-basic-600/[0.24] disabled:border-basic-600/[0.24] disabled:text-basic-600/[0.48] disabled:cursor-not-allowed',
		{
			// sizing
			'px-3.5 py-1.5 text-xs': size === 'tiny',
			'px-4 py-2 text-sm': size === 'small',
			'px-4 py-3': size === 'medium',
			'px-5 py-3.5 text-lg': size === 'large',
			'px-6 py-4 text-xl': size === 'giant',

			// filled
			'border-basic bg-basic hover:bg-basic-200 hover:border-basic-200 active:bg-basic-400 focus:bg-basic-400 focus:border-basic-500 focus:hover:bg-basic-200 focus:hover:border-basic-200 focus:hover:active:bg-basic-400 focus:hover:active:border-basic-400':
				color === 'basic' && variant === 'filled',
			'text-basic-100 border-primary bg-primary hover:bg-primary-400 hover:border-primary-400 active:bg-primary-600 focus:bg-primary-600 focus:border-primary-700 focus:hover:bg-primary-400 focus:hover:border-primary-400 focus:hover:active:bg-primary-600 focus:hover:active:border-primary-700':
				color === 'primary' && variant === 'filled',
			'text-basic-100 border-success bg-success hover:bg-success-400 hover:border-success-400 active:bg-success-600 focus:bg-success-600 focus:border-success-700 focus:hover:bg-success-400 focus:hover:border-success-400 focus:hover:active:bg-success-600 focus:hover:active:border-success-700':
				color === 'success' && variant === 'filled',
			'text-basic-100 border-info bg-info hover:bg-info-400 hover:border-info-400 active:bg-info-600 focus:bg-info-600 focus:border-info-700 focus:hover:bg-info-400 focus:hover:border-info-400 focus:hover:active:bg-info-600 focus:hover:active:border-info-700':
				color === 'info' && variant === 'filled',
			'text-basic-100 border-warning bg-warning hover:bg-warning-400 hover:border-warning-400 active:bg-warning-600 focus:bg-warning-600 focus:border-warning-700 focus:hover:bg-warning-400 focus:hover:border-warning-400 focus:hover:active:bg-warning-600 focus:hover:active:border-warning-700':
				color === 'warning' && variant === 'filled',
			'text-basic-100 border-danger bg-danger hover:bg-danger-400 hover:border-danger-400 active:bg-danger-600 focus:bg-danger-600 focus:border-danger-700 focus:hover:bg-danger-400 focus:hover:border-danger-400 focus:hover:active:bg-danger-600 focus:hover:active:border-danger-700':
				color === 'danger' && variant === 'filled',

			// outline
			'border focus:shadow-btn-outer-inner': variant === 'outline',
			'text-basic-600 border-basic-600 bg-basic-600/[.08] hover:bg-basic-600/[.16] active:bg-basic/[.24] focus:bg-basic/[.24] focus:hover:bg-basic-600/[.16] focus:hover:shadow-btn-outer focus:active:shadow-btn-outer-inner':
				color === 'basic' && variant === 'outline',
			'text-primary border-primary bg-primary/[.08] hover:bg-primary/[.16] active:bg-primary/[.24] focus:bg-primary/[.24] focus:hover:bg-primary/[.16] focus:hover:shadow-btn-outer focus:active:shadow-btn-outer-inner':
				color === 'primary' && variant === 'outline',
			'text-success border-success bg-success/[.08] hover:bg-success/[.16] active:bg-success/[.24] focus:bg-success/[.24] focus:hover:bg-success/[.16] focus:hover:shadow-btn-outer focus:active:shadow-btn-outer-inner':
				color === 'success' && variant === 'outline',
			'text-info border-info bg-info/[.08] hover:bg-info/[.16] active:bg-info/[.24] focus:bg-info/[.24] focus:hover:bg-info/[.16] focus:hover:shadow-btn-outer focus:active:shadow-btn-outer-inner':
				color === 'info' && variant === 'outline',
			'text-warning border-warning bg-warning/[.08] hover:bg-warning/[.16] active:bg-warning/[.24] focus:bg-warning/[.24] focus:hover:bg-warning/[.16] focus:hover:shadow-btn-outer focus:active:shadow-btn-outer-inner':
				color === 'warning' && variant === 'outline',
			'text-danger border-danger bg-danger/[.08] hover:bg-danger/[.16] active:bg-danger/[.24] focus:bg-danger/[.24] focus:hover:bg-danger/[.16] focus:hover:shadow-btn-outer focus:active:shadow-btn-outer-inner':
				color === 'danger' && variant === 'outline',

			// ghost
			'bg-transparent border-transparent hover:bg-basic-600/[.08] active:bg-basic-600/[.16] active:border-basic-600/[.16] focus:shadow-btn-outer-inner focus:border-basic-600/[.4] focus:bg-basic-600/[.16] focus:hover:shadow-btn-outer focus:hover:bg-basic-600/[.08] focus:hover:border-basic-600/[.08] active:focus:shadow-btn-outer-inner':
				variant === 'ghost',
			'text-primary': color === 'primary' && variant === 'ghost',
			'text-success': color === 'success' && variant === 'ghost',
			'text-info': color === 'info' && variant === 'ghost',
			'text-warning': color === 'warning' && variant === 'ghost',
			'text-danger': color === 'danger' && variant === 'ghost',
		},
		className,
	)

	return (
		<button className={classNames} {...restProps}>
			{children}
		</button>
	)
}
