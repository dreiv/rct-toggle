import React from 'react'
import './Toggle.css'

export default function Toggle({ className, ...props }) {
	return (
		<label className={`toggle ${className}`}>
			<input type="checkbox" className="toggle__input" {...props} />
			<div className="toggle__container">
				<div className="toggle__knob" />
			</div>
		</label>
	)
}
