import React from 'react'
import cn from 'classnames'

type Props = React.HTMLAttributes<HTMLInputElement> & {
	color: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
	checked?: boolean
	disabled?: boolean
}

export const Checkbox: React.FC<Props> = (props) => {
	const { color = 'basic', checked = false, disabled = false, children } = props

	const boxClassNames = cn(
		'absolute border w-5 h-5 rounded-[3px] transition flex justify-center items-center peer-checked:bg-check bg-center bg-no-repeat peer-focus:shadow-ctrl-both peer-disabled:bg-basic-600/[.08] peer-disabled:border-basic-600/[.48] peer-checked:peer-disabled:bg-basic-600/[.48] peer-disabled:hover:border-basic-600/[.48] peer-disabled:cursor-not-allowed',
		{
			'border-basic-500 bg-basic-600/[.08] peer-focus:border-basic-600 peer-focus:bg-basic-600/[.24] peer-focus:hover:bg-basic-600/[.08] hover:border-primary hover:bg-primary/[.16] peer-checked:bg-primary peer-checked:border-primary peer-checked:hover:bg-primary-400 peer-checked:hover:border-primary-400 peer-checked:peer-active:bg-primary-600 peer-checked:peer-active:border-primary-600 peer-checked:peer-focus:bg-primary-600 peer-checked:peer-focus:border-primary-700':
				color === 'basic',
			'border-primary-500 bg-primary-600/[.08] peer-focus:bg-primary-500/[.24] peer-focus:hover:bg-primary-500/[.08] hover:bg-primary/[.16] peer-checked:bg-primary peer-checked:border-primary peer-checked:hover:bg-primary-400 peer-checked:hover:border-primary-400 peer-checked:peer-active:bg-primary-600 peer-checked:peer-active:border-primary-600 peer-checked:peer-focus:bg-primary-600 peer-checked:peer-focus:border-primary-700':
				color === 'primary',
			'border-success-500 bg-success-600/[.08] peer-focus:bg-success-500/[.24] peer-focus:hover:bg-success-500/[.08] hover:bg-success/[.16] peer-checked:bg-success peer-checked:border-success peer-checked:hover:bg-success-400 peer-checked:hover:border-success-400 peer-checked:peer-active:bg-success-600 peer-checked:peer-active:border-success-600 peer-checked:peer-focus:bg-success-600 peer-checked:peer-focus:border-success-700':
				color === 'success',
			'border-info-500 bg-info-600/[.08] peer-focus:bg-info-500/[.24] peer-focus:hover:bg-info-500/[.08] hover:bg-info/[.16] peer-checked:bg-info peer-checked:border-info peer-checked:hover:bg-info-400 peer-checked:hover:border-info-400 peer-checked:peer-active:bg-info-600 peer-checked:peer-active:border-info-600 peer-checked:peer-focus:bg-info-600 peer-checked:peer-focus:border-info-700':
				color === 'info',
			'border-warning-500 bg-warning-600/[.08] peer-focus:bg-warning-500/[.24] peer-focus:hover:bg-warning-500/[.08] hover:bg-warning/[.16] peer-checked:bg-warning peer-checked:border-warning peer-checked:hover:bg-warning-400 peer-checked:hover:border-warning-400 peer-checked:peer-active:bg-warning-600 peer-checked:peer-active:border-warning-600 peer-checked:peer-focus:bg-warning-600 peer-checked:peer-focus:border-warning-700':
				color === 'warning',
			'border-danger-500 bg-danger-600/[.08] peer-focus:bg-danger-500/[.24] peer-focus:hover:bg-danger-500/[.08] hover:bg-danger/[.16] peer-checked:bg-danger peer-checked:border-danger peer-checked:hover:bg-danger-400 peer-checked:hover:border-danger-400 peer-checked:peer-active:bg-danger-600 peer-checked:peer-active:border-danger-600 peer-checked:peer-focus:bg-danger-600 peer-checked:peer-focus:border-danger-700':
				color === 'danger',
		},
	)

	return (
		<label className="flex items-center cursor-pointer text-basic-800 text-sm font-semibold">
			<input type="checkbox" checked={checked} disabled={disabled} className="sr-only peer" />
			<span className={boxClassNames} />
			<span className="pl-7">{children}</span>
		</label>
	)
}
