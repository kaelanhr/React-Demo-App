import React, { Component } from 'react'

interface IProps {
	value: any
}

export default class Square extends Component<IProps> {
	render() {
		return (
			<button className="square">
				{this.props.value}
			</button>
		)
	}
}