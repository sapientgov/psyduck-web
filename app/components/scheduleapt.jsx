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

				<div className="usa-width-one-whole add-hmargin">
					<h4>Please select a date to view open slots for that day.</h4>
					<img className="calendar-icon" src="/static-assets/calendar-icon24x24.png" /><DatePicker placeholderText="Click to select a date" selected={this.state.startDate} onChange={this.handleChange} />
				</div>
				<div className="usa-width-one-whole">
					<h3>Schedule for Day</h3>
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
							
							<div className="apptSlotCol">
								<p>select this spot</p>
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
							
							<div className="apptSlotCol filled">
								<p>filled</p>
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
							
							<div className="apptSlotCol">
								<p>select this spot</p>
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
							
							<div className="apptSlotCol filled">
								<p>filled</p>
							</div>  
						</div> 
					</div>

					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>11:30</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol">
								<p>slot 1</p>
							</div>
							
							<div className="apptSlotCol">
								<p>slot 1</p>
							</div>  
						</div> 
					</div>
				</div>
				
				
				
			</div>
		);
	}
}
