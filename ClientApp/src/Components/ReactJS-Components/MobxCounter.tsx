import React, { Component } from 'react'
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

interface TimerState {
	hours: number
	minutes: number
	seconds: number
	isActive: boolean,
}

@observer
export default class MobxCounter extends Component<{}> {
	interval: any;
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			minutes: 0
		}
	}

	@observable
	private timer: TimerState = {
		hours: 0,
		minutes: 0,
		seconds: 0,
		isActive: false,
	};

	reverseState = (): void => {
		this.timer.isActive = !this.timer.isActive;
	}
	reset = (): void => {
		var r = window.confirm("Are you sure you wish to reset this timer?");
		if (r == true) {
			this.timer.isActive = false;
			this.timer.seconds = 0;
			this.timer.hours = 0;
			this.timer.minutes = 0;
		}
	}

	tick() {
		if (!this.timer.isActive) { return; }
		this.timer.seconds++;
		if (this.timer.seconds > 1 && this.timer.seconds % 60 == 0) {
			this.timer.minutes++;
			this.timer.seconds = 0;
		}
		if (this.timer.minutes > 1 && this.timer.minutes % 60 == 0) {
			this.timer.hours++;
			this.timer.minutes = 0;
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {

		return (
			<div>
				<h2>Mobx Counter</h2>
				<p>{this.timer.hours} Hours</p>
				<p>{this.timer.minutes} Minutes</p>
				<p>{this.timer.seconds} Seconds</p>
				<button onClick={this.reverseState}>{this.timer.isActive ? 'Pause' : 'Start'}</button>
				<button onClick={this.reset}>Reset</button>
			</div>
		)
	}
}
