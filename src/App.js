import React, { Component } from 'react'
import './App.css'
import Toggle from './components/Toggle'

class App extends Component {
	render() {
		return (
			<div className="App">
				Try this toggle: <Toggle /> 🐈
			</div>
		)
	}
}

export default App
