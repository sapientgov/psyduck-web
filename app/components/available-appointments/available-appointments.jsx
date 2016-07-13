import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppointmentRow from '../appointment-row/appointment-row';
import {getAppointments} from '../../actions/appointments-actions';

const hours = ['0900', '0930', '1000', '1030', '1100', '1130', '1200', '1230', '1300', '1330', '1400', '1430', '1500', '1530', '1600', '1630', '1700'];

export class AvailableAppointments extends Component {
  componentWillMount() {
    this.props.dispatch(getAppointments(this.props.date));
  }

  render() {
    return (
      <div>
        <div className="usa-width-one-whole">
          <h3>Schedule</h3>

          {this.props.appointments.length < 17 ? null :
            <div className="usa-alert usa-alert-info add-hmargin">
              <div className="usa-alert-body">
                <p className="usa-alert-text">There are no appointments available on the date you selected.</p>
              </div>
            </div>
          }

        </div>

        <div className="appt-calendar usa-width-one-whole add-hmargin wrap-border">
          {hours.map(h => {
            let filled = false;
            for(let i = 0; i < this.props.appointments.length; i++) {
              if(this.props.appointments[i].time === h) {
                filled = true;
              }
            }
            return <AppointmentRow time={h} filled={filled} />
          })}
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    appointments: state.appointments.items
  }
}

export default connect(mapStateToProps)(AvailableAppointments);
