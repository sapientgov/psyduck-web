import React, {Component} from 'react';
import {hashHistory} from 'react-router';

export default class AppointmentRow extends Component {
  render() {
    return (
      <div className="aptCalRow clearfix">
        <div className="timecol">
          <p>{this.props.time}</p>
        </div>
        <div className="apptCol" onClick={() => hashHistory.push('/appointmentdetails')}>
          <div className={this.props.filled ? 'apptSlotCol filled' : 'apptSlotCol'}>
            <p>{this.props.filled ? 'filled' : 'select this spot'}</p>
          </div>
        </div>
      </div>
    );
  }
}
