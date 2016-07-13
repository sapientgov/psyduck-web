import React, {Component} from 'react';
import {connect} from 'react-redux';

import AvailableAppointments from '../available-appointments/available-appointments';

export class StaffView extends Component {
  render() {
    return (
      <div className="uikit usa-grid">
        <p>Logged in as: {this.props.user}</p>
        <h3>Appointment Dashboard</h3>
        <div className="scheduleapt">
          <AvailableAppointments />
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
