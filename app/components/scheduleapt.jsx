import '../sass/schedule.scss';

import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';


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
						<option value="value1">Albany, NY</option>
						<option value="value2">Boston, MA</option>
						<option value="value3">Cincinnatti, OH</option>
					</select>
				</div>
				<div className="usa-width-one-whole add-hmargin schedule-step">
					<h3>Next available appointments for XX/XX/XXXX</h3>
					<span className="label">Select a different day:</span>
					<DatePicker placeholderText="Click to select a date" selected={this.state.startDate} onChange={this.handleChange} /> <img className="calendar-icon" src="/static-assets/calendar-icon24x24.png" />
				</div>
				<div className="usa-width-one-whole">
					<h3>Schedule</h3>
					<div className="usa-alert usa-alert-info add-hmargin">
						<div className="usa-alert-body">
							<p className="usa-alert-text">There are no appointments available on the date you selected.</p>
						</div>
					</div>
					
				</div>
				<div className="appt-calendar usa-width-one-whole add-hmargin wrap-border">
					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>9:00</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol filled">
								<p>filled</p>
							</div>
							
							
						</div> 
					</div>

					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>9:30</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol">
								<p>select this spot</p>
							</div>
							
							
						</div> 
					</div>

					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>10:00</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol">
								<p>select this spot</p>
							</div>
							
							
						</div> 
					</div>

					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>10:30</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol filled">
								<p>filled</p>
							</div>
							
							
						</div> 
					</div>

					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>11:00</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol">
								<p>select this spot</p>
							</div>
							
							
						</div> 
					</div>

					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>11:30</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol">
								<p>select this spot</p>
							</div>
							
							  
						</div> 
					</div>
				</div>
				
				
				
			</div>
		);
	}
}
