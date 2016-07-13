import '../sass/schedule.scss';

import React, {Component} from 'react';

export default class AppointmentDetails extends Component {
	constructor(props){
		super(props);
		this.printWindow = this.printWindow.bind(this);
	}
	printWindow(){
		window.print();
	}
  	render() {
		return (
			<div>
			<div className="usa-width-one-whole section-header">
	            <h2>Logged in as <b>username</b><button className="usa-button-outline right">Log Out</button></h2>
	          </div>
	          <div className="usa-width-one-whole back-link">
	          	<img src="/static-assets/arrow-left.png" alt="Back to Dashbaord" /><a className="back-link" href="">Back to Dashboard</a>
	          </div>
			<div className="usa-grid scheduleapt confirmation">
				<h2>Appointment Details</h2>
				
				<div className="usa-width-one-whole">
					<div className="wrap-solid-border usa-width-one-whole add-hmargin">
						<div className="usa-width-one-whole">
								<button className="usa-button-gray right">Edit</button>
						</div>
						<div className="appt-calendar usa-width-one-whole wrap-border">
							<div className="aptCalRow clearfix">
								<div className="timecol">
									<p>Location</p>
								</div>
								<div className="apptCol">
									<div className="apptSlotCol no-fill">
										<p>1515 N Courthouse Rd. Suite 300 Washington, DC</p>
									</div>
								</div> 
							</div>
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
						</div>
						
					</div>
					
					<div className="appt-calendar usa-width-one-whole wrap-border">
						<div className="aptCalRow clearfix">
							<div className="timecol">
								<p>Assigned To</p>
							</div>
							<div className="apptCol">
								<div className="apptSlotCol no-fill">
									<select title="Select a Staffmember" name="staffmembers" id="staffmembers">
										<option value="burlington" selected>John Q. Staffmember</option>
										<option value="dallas">Mary Jones</option>
									</select>
								</div>
							</div> 
						</div>
						<div className="aptCalRow clearfix">
							<div className="timecol">
								<p>ID</p>
							</div>
							<div className="apptCol">
								<div className="apptSlotCol no-fill">
									<p>1232424</p>
								</div>
							</div> 
						</div>
						
					</div>	
					<div className="usa-width-one-whole">
						<h3>Applicant Info</h3>
					</div>
					<div className="appt-calendar usa-width-one-whole wrap-border add-hmargin">
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
				
				<div className="usa-width-one-whole add-hmargin clearfix">
					<div className="bottom-buttons button_wrapper left">
						<button className="usa-button-big">Save</button>
					</div>
					<div className="button_wrapper right">
						<button className="usa-button-gray">Print</button> <button className="usa-button-gray">Delete</button>
					</div>
				</div>
			</div>
			</div>
		);
	}
}
