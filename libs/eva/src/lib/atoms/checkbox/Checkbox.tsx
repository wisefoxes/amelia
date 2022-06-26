import React from 'react'
import cn from 'classnames'

type Props = React.HTMLAttributes<HTMLInputElement> & {
	color: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
	checked?: boolean
}

export const Checkbox: React.FC<Props> = (props) => {
	const { color = 'basic', checked } = props

	const classNames = cn(
		'border w-5 h-5 rounded-[3px] cursor-pointer transition flex justify-center items-center peer-checked:bg-primary peer-checked:border-primary peer-checked:hover:bg-primary-400 peer-checked:hover:border-primary-400 peer-checked:bg-check bg-center bg-no-repeat',
		{
			'border-basic-500 bg-basic-600/[.16]': color === 'basic',
			'border-primary-500 bg-primary-600/[.16]': color === 'primary',
			'border-success-500 bg-success-600/[.16] peer-checked:bg-success peer-checked:border-success peer-checked:hover:bg-success-400 peer-checked:hover:border-success-400':
				color === 'success',
			'border-info-500 bg-info-600/[.16] peer-checked:bg-info peer-checked:border-info peer-checked:hover:bg-info-400 peer-checked:hover:border-info-400':
				color === 'info',
			'border-warning-500 bg-warning-600/[.16] peer-checked:bg-warning peer-checked:border-warning peer-checked:hover:bg-warning-400 peer-checked:hover:border-warning-400':
				color === 'warning',
			'border-danger-500 bg-danger-600/[.16] peer-checked:bg-danger peer-checked:border-danger peer-checked:hover:bg-danger-400 peer-checked:hover:border-danger-400':
				color === 'danger',
		},
	)

	return (
		<label>
			<input type="checkbox" checked={checked} className="sr-only peer" />
			<span className={classNames} />
		</label>
	)
}
