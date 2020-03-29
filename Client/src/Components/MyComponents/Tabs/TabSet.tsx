import React, { Component } from 'react'
import { ComponentOne, ComponentTwo, ComponentThree, ComponentFour } from './TestTabComponents';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer
export default class TabSet extends Component<TabSetProps> {

	@action
	switchTab(tabName: string) {
		this.tabs = this.props.value
			.filter(x => x.name == tabName)
			.map(x => <Tab {...x} />)
	}

	@observable
	tabs = this.props.value
		.filter(x => x.isDefault)
		.map(x => <Tab {...x} />)

	render() {
		const tabTitles = this.props.value.map(x => <button id={this.toStandardAttrFormat(x.name)} onClick={() => this.switchTab(x.name)}>{x.name}</button>)
		return (
			<div className="tab-set">
				{tabTitles}
				{this.tabs}
			</div>
		)
	}

	toStandardAttrFormat = (word: string) => {
		return word.toLowerCase().split(" ").join("-")
	}
}

interface TabSetProps {
	value: TabProps[]
}

export interface TabProps {
	name: string,
	childComponent: React.ReactNode
	isDefault: boolean
}

class Tab extends Component<TabProps> {
	render() {
		return (
			<div className={this.props.name}>
				{this.props.childComponent}
			</div>
		);
	}
}