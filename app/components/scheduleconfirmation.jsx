import '../sass/schedule.scss';

import React, {Component} from 'react';

export default class ScheduleConfirmation extends Component {
	constructor(props){
		super(props);
		this.printWindow = this.printWindow.bind(this);
	}
	printWindow(){
		window.print();
	}
  	render() {
		return (
			<div className="usa-grid scheduleapt confirmation">
				<h2>Appointment Confirmed</h2>
				
				<div className="usa-width-one-whole">
					<div className="appt-calendar usa-width-one-whole wrap-border">
					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>Date</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol no-fill">
								<p>XX/XX/XXXX</p>
							</div>
						</div> 
					</div>

					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>Time</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol no-fill">
								<p>9:30AM</p>
							</div>
						</div> 
					</div>
					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>Location</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol no-fill">
								<p>Washington, DC</p>
							</div>
						</div> 
					</div>
					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>Name</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol no-fill">
								<p>John Doe</p>
							</div>
						</div> 
					</div>
					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>Email</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol no-fill">
								<p>jdoe@gmail.com</p>
							</div>
						</div> 
					</div>
					<div className="aptCalRow clearfix">
						<div className="timecol">
							<p>Mobile</p>
						</div>
						<div className="apptCol">
							<div className="apptSlotCol no-fill">
								<p>555.555.5555</p>
							</div>
						</div> 
					</div>
				</div>
				</div>
				<div className="usa-width-one-whole">
					<div className="usa-alert usa-alert-info add-hmargin">
						<div className="usa-alert-body">
							<p className="usa-alert-text">A copy of this confirmation has been sent to your email.</p>
						</div>
					</div>
					
				</div>
				<div className="usa-width-one-whole add-hmargin clearfix">
					<div className="button_wrapper left">
						<button className="usa-button-big" onClick={this.printWindow}>Print</button>
					</div>
					<div className="button_wrapper right">
						<button className="usa-button-gray">Edit</button> <button className="usa-button-gray">Delete</button>
					</div>
				</div>
				
				
				
			</div>
		);
	}
}
