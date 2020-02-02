import React, { Component } from 'react'

interface IState {
	value: any
}

interface IProps {
	onClick: Function
	value: any
}

export default class Square extends Component<IProps, IState> {
	render() {
		return (
			<button
				className="square"
				onClick={() => this.props.onClick()}
			>
				{this.props.value}
			</ button >
		)
	}
}