import React, { Component/*, PropTypes */} from 'react'
import {connect} from 'react-redux';
import CreateAppointment from './create-appointment/create-appointment';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2016-07-13'
    }

  }

  render() {
    return (
      <div className="usa-grid">
        <h3>Create an Appointment</h3>
        <CreateAppointment />
      </div>
    )
  }
}

export default connect()(Home);
