import React, {Component} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {getAppointments} from '../../actions/appointments-actions';

import AvailableAppointments from '../available-appointments/available-appointments';

export class StaffView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2016-07-13'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const newDate = date.format('YYYY-MM-DD');
    this.setState({date: newDate});
    this.props.dispatch(getAppointments(newDate));
  }

  render() {
    return (
      <div className="uikit usa-grid">
        <p>Logged in as: {this.props.user}</p>
        <h3>Appointment Dashboard</h3>
        <div className="usa-width-one-whole add-hmargin schedule-step">
					<h3>Next available appointments for XX/XX/XXXX</h3>
					<span className="label">Select a different day:</span>
					<DatePicker  placeholderText="Click to select a date" selected={moment(this.state.date, 'YYYY-MM-DD')}
            dateFormat="YYYY-MM-DD"
            onChange={this.handleChange} />
          <img className="calendar-icon" src="/static-assets/calendar-icon24x24.png" />
				</div>
        <div className="scheduleapt">
          <AvailableAppointments date={this.state.date}/>
        </div>
        <div>
          <button onClick="javascript:window.print();">Print</button>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(StaffView);
