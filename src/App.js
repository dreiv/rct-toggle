import React, { Component } from 'react'
import './App.css'
import Toggle from './components/Toggle'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			checked: false,
			size: 1,
		}
	}

	toggle = () => {
		this.setState(prevState => ({
			checked: !prevState.checked,
		}))
	}

	handleResize = ({ target: { value } }) => {
		this.setState({ size: +value })
	}

	render() {
		const { checked, size } = this.state

		return (
			<div className="App">
				Try this accessible toggle:
				<Toggle
					value={checked}
					defaultChecked={checked}
					onChange={this.toggle}
					style={{ fontSize: `${size}em` }}
				/>
				<span role="img" aria-label="cat">
					🐈
				</span>
				<h1>
					<p>Toggle checked: {`${checked}`}</p>
					<p>
						Toggle size:
						<input type="number" value={size} onChange={this.handleResize} />
					</p>
				</h1>
			</div>
		)
	}
}

export default App
