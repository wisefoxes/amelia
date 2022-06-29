import React from 'react'
import cn from 'classnames'

type Props = React.HTMLAttributes<HTMLInputElement> & {
	color?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
	disabled?: boolean
	className?: string
	checked?: boolean
}

export const Toggle: React.FC<Props> = (props) => {
	const { color = 'basic', className, ...restProps } = props

	const inputClasses = cn('sr-only peer', className)
	const outerOvalClasses = cn(
		'transition block relative w-14 h-8 border border-basic-500 rounded-full peer-focus:border-basic-600 peer-focus:bg-basic-600/[.4] peer-focus:shadow-ctrl-outer-sm',
		{
			'bg-basic-600/[.16] group-hover:shadow-ctrl-outer-sm group-hover:border-primary group-hover:bg-primary/[.16]':
				color === 'basic',
		},
	)
	const innerOvalClasses = cn(
		'absolute transition-[left] block rounded-full bg-basic-100 w-7 h-7 top-1/2 -translate-y-1/2 left-[2px] peer-checked:left-[26px]',
	)

	return (
		<label className="relative cursor-pointer group">
			<input type="checkbox" className={inputClasses} {...restProps} />
			<span className={outerOvalClasses} />
			<span className={innerOvalClasses} />
		</label>
	)
}
