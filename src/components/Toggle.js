import React from 'react'
import './Toggle.css'

export default function Toggle({ className, style, ...props }) {
	return (
		<label className={`toggle ${className}`} {...{ style }}>
			<input type="checkbox" className="toggle__input" {...props} />
			<div className="toggle__container" />
		</label>
	)
}
