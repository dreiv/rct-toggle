import React from 'react'
import './Toggle.css'

export default function Toggle() {
	return (
		<label className="toggle">
			<input type="checkbox" className="toggle__input" />
			<div className="toggle__container">
				<div className="toggle__knob" />
			</div>
		</label>
	)
}
