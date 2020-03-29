import React, { Component, PureComponent } from 'react'
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer
export class IncrementingTabs extends PureComponent {
	constructor(props: any) {
		super(props);
	}

	@observable
	private TabModel = {
		ActiveTab: 0,
	};

	@action IncrementTab = () => {
		if (this.TabModel.ActiveTab < React.Children.toArray(this.props.children).length - 1) {
			this.TabModel.ActiveTab++;
		} else {
			this.TabModel.ActiveTab = 0;
		}
	}

	render() {
		return (
			<>
				<h2>Incrementing Tabs</h2>
				<div className="IncrementingTabs">
					{React.Children.toArray(this.props.children)[this.TabModel.ActiveTab]}
				</div>

				<button onClick={this.IncrementTab}>Click to Increment</button>
			</>
		)
	}
}

export class ComponentOne extends Component {
	render() {
		return (
			<>
				<h2>ComponentOne</h2>
				<p>This is the Content for the first component</p>
			</>
		);
	}
}

export class ComponentTwo extends Component {
	render() {
		return (
			<>
				<h2>ComponentTwo</h2>
				<p>This is the Content for the second component</p>
			</>
		)
	}
}

export class ComponentThree extends Component {
	render() {
		return (
			<>
				<h2>ComponentThree</h2>
				<p>This is the Content for the third component</p>
			</>
		)
	}
}

export class ComponentFour extends Component {
	render() {
		return (
			<>
				<h2>ComponentFour</h2>
				<p>This is the Content for the fourth component</p>
			</>
		);
	}
}