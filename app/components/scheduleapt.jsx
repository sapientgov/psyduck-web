import '../sass/schedule.scss';

import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import AvailableAppointments from './available-appointments/available-appointments';


export default class ScheduleApt extends Component {
	constructor(props){
		super(props);
		this.state = this.getInitialState();
		this.handleChange = this.handleChange.bind(this);
	}
	getInitialState() {
		return {
			startDate: moment()
		};
	}

	handleChange(date) {
		this.setState({
			startDate: date
		});
	}
	render() {
		return (
			<div className="uikit usa-grid scheduleapt">
				<h2>Schedule An Appointment</h2>
				<div className="usa-width-one-whole add-hmargin schedule-step">
					<h3>Select an office.</h3>
					<select title="Select an Office" name="offices" id="options">
						<option value="burlington">Burlington, VT</option>
						<option value="dallas">Dallas, TX</option>
						<option value="honolulu">Honolulu, HI</option>
						<option value="lasvegas">Las Vegas, NV</option>
						<option value="losangeles">Los Angeles, CA</option>
						<option value="miami">Miami, FL</option>
						<option value="neworleans">New Orleans, LA</option>
						<option value="sanfrancisco">San Francisco, CA</option>
						<option value="sanjuan">San Juan, PR</option>
						<option value="stthomas">St. Thomas, VI</option>
						<option value="washingtondc">Washington, DC</option>
					</select>
				</div>
				<div className="usa-width-one-whole add-hmargin schedule-step">
					<h3>Next available appointments for XX/XX/XXXX</h3>
					<span className="label">Select a different day:</span>
					<DatePicker placeholderText="Click to select a date" selected={this.state.startDate} onChange={this.handleChange} /> <img className="calendar-icon" src="/static-assets/calendar-icon24x24.png" />
				</div>
				<AvailableAppointments />
			</div>
		);
	}
}
