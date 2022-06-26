import React from 'react'
import cn from 'classnames'

type Props = React.HTMLAttributes<HTMLInputElement> & {
	className?: string
	type?: 'text' | 'password'
}

export const Input: React.FC<Props> = (props) => {
	const { className = '', ...restProps } = props
	const classNames = cn(
		'border rounded outline-none border-basic-400 transition font-semibold px-4 py-2 text-basic-800 bg-basic-200 placeholder-basic-600 placeholder:font-normal placeholder:text-ellipsis hover:bg-basic focus:bg-basic-100 focus:border-primary focus:hover:bg-basic focus:hover:border-basic-400',
		className,
	)

	return <input className={classNames} {...restProps} />
}
