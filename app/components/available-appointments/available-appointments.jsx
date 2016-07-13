import React, {Component} from 'react';
import AppointmentRow from '../appointment-row/appointment-row';

export default class AvailableAppointments extends Component {
  render() {
    return (
      <div>
        <div className="usa-width-one-whole">
          <h3>Schedule</h3>
          <div className="usa-alert usa-alert-info add-hmargin">
            <div className="usa-alert-body">
              <p className="usa-alert-text">There are no appointments available on the date you selected.</p>
            </div>
          </div>

        </div>

        <div className="appt-calendar usa-width-one-whole add-hmargin wrap-border">
          <AppointmentRow time="9:00" filled={true} />
          <AppointmentRow time="9:30" filled={false} />
          <AppointmentRow time="10:00" filled={false} />
          <AppointmentRow time="10:30" filled={true} />
          <AppointmentRow time="11:00" filled={false} />
          <AppointmentRow time="11:30" filled={false} />
        </div>
      </div>
    );
  }
}
