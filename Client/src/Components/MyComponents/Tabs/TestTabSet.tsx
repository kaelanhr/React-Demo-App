import { Component } from 'react'
import React from 'react'
import { ComponentTwo, ComponentThree, ComponentFour, ComponentOne } from './TestTabComponents'
import TabSet, { TabProps } from './TabSet'

export class TestTabSet extends Component {
	render() {

		let tabs: TabProps[] = [
			{ name: "Component One", childComponent: <ComponentOne />, isDefault: true },
			{ name: "Component Two", childComponent: <ComponentTwo />, isDefault: false },
			{ name: "Component Three", childComponent: <ComponentThree />, isDefault: false },
			{ name: "Component Four", childComponent: <ComponentFour />, isDefault: false }
		]
		return (
			<>
				<h2>Clickable Tab Set</h2>
				<TabSet value={tabs} />
			</>
		)
	}
}