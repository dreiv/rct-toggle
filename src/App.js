import React, { Component } from 'react'
import './App.css'
import Toggle from './components/Toggle'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			checked: false,
		}
	}

	toggle = () => {
		this.setState(prevState => ({
			checked: !prevState.checked,
		}))
	}

	render() {
		const { checked } = this.state

		return (
			<div className="App">
				Try this accessible toggle:
				<Toggle
					value={checked}
					defaultChecked={checked}
					onChange={this.toggle}
				/>
				<h1>
					<span role="img" aria-label="cat">
						🐈
					</span>
					The toggle is checked: {`${checked}`}
				</h1>
			</div>
		)
	}
}

export default App
