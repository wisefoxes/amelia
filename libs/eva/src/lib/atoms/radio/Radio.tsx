import React from 'react'
import cn from 'classnames'

type Props = React.HTMLAttributes<HTMLInputElement> & {
	disabled?: boolean
	checked?: boolean
	className?: string
	color?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
}

export const Radio: React.FC<Props> = (props) => {
	const { checked = false, className = '', color = 'basic', children, ...restProps } = props

	const circleClasses = cn(
		'absolute transition block border rounded-full w-5 h-5 group-hover:bg-transparent peer-focus:shadow-ctrl-outer peer-focus:bg-transparent group-hover:peer-checked:bg-transparent',
		'peer-disabled:bg-basic-600/[.16] peer-disabled:border-basic-600/[.24] group-hover:peer-disabled:bg-basic-600/[.16] group-hover:peer-disabled:border-basic-600/[.24] peer-disabled:cursor-not-allowed',
		{
			'border-basic-500 bg-basic-600/[.16] group-hover:bg-primary-500/[.16] group-hover:border-primary peer-focus:border-primary-700 group-hover:peer-focus:border-primary-400':
				color === 'basic',
			'border-primary-400 bg-primary-600/[.16] group-hover:bg-primary-500/[.16] group-hover:border-primary peer-focus:border-primary-700 group-hover:peer-focus:border-primary-400':
				color === 'primary',
			'border-success-400 bg-success-600/[.16] group-hover:bg-success-500/[.16] group-hover:border-success peer-focus:border-success-700 group-hover:peer-focus:border-success-400':
				color === 'success',
			'border-info-400 bg-info-600/[.16] group-hover:bg-info-500/[.16] group-hover:border-info peer-focus:border-info-700 group-hover:peer-focus:border-info-400':
				color === 'info',
			'border-warning-400 bg-warning-600/[.16] group-hover:bg-warning-500/[.16] group-hover:border-warning peer-focus:border-warning-700 group-hover:peer-focus:border-warning-400':
				color === 'warning',
			'border-danger-400 bg-danger-600/[.16] group-hover:bg-danger-500/[.16] group-hover:border-danger peer-focus:border-danger-700 group-hover:peer-focus:border-danger-400':
				color === 'danger',
		},
		className,
	)
	const innerCircleClasses = cn(
		'hidden transition absolute block scale-[0.6] rounded-full w-5 h-5 peer-checked:block',
		'peer-disabled:bg-basic-600/[.24] peer-disabled:cursor-not-allowed',
		{
			'bg-primary group-hover:bg-primary-400 peer-focus:bg-primary-700': color === 'basic' || color === 'primary',
			'bg-success group-hover:bg-success-400 peer-focus:bg-success-700': color === 'success',
			'bg-info group-hover:bg-info-400 peer-focus:bg-info-700': color === 'info',
			'bg-warning group-hover:bg-warning-400 peer-focus:bg-warning-700': color === 'warning',
			'bg-danger group-hover:bg-danger-400 peer-focus:bg-danger-700': color === 'danger',
		},
	)

	return (
		<label className="cursor-pointer flex items-center text-basic-800 text-sm font-semibold group">
			<input type="radio" checked={checked} className="sr-only peer" {...restProps} />
			<span className={circleClasses} />
			<span className={innerCircleClasses} />
			<span className="pl-7 leading-5">{children}</span>
		</label>
	)
}
