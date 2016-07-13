import '../../sass/uikit.scss';

import React, { Component } from 'react'
import {connect} from 'react-redux';
import FormField from '../common/form-field/form-field';
import {createAppointment} from '../../actions/appointments-actions';
import {hashHistory} from 'react-router';


class CreateAppointmentPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      office: '',
      staff: '',
      err: ''
    };
  }

  handleChange(obj) {
    this.setState(obj, ()=>{
      console.log(this.state);
    });
  }

  modelIsValid() {
    //check for empty fields
    if(!this.state.firstname
      || !this.state.lastname
      || !this.state.email
      // || !this.state.office
      // || !this.state.date
      // || !this.state.time
      // || !this.state.staff
      || !this.state.phone ){
        return {err: 'One or more form fields have not been filled in.'};
    }

    //validate phone number length
    if(this.state.phone.length < 10){
      return {err: 'The phone number entered does not have 10 digits.'};
    }

    //validate email format
    if(this.state.email.indexOf('@') <= -1){
      return {err: 'The email address entered does not contain the @ symbol.'};
    }
    /*const alias = this.state.email.split('@')[0];
    const domain = this.state.email.split('@')[1];
    const domain1 = domain.split('.')[0];
    const domain2 = domain.split('.')[1];

    if(alias.length < 3 || domain1.length < 3 || domain2.length < 3){
      return {err: 'The email address entered is not long enough to be recognized.'};
    }*/

    return {err: ''};
  }

  submitAppointment() {
    console.log('submit');
    const errObj = this.modelIsValid();
    if(errObj){
      this.setState({err: errObj.err});
    } else {
      console.log('Submitting!');
      //send state object to POST method
      this.props.dispatch(createAppointment(this.state));
    }
  }

  render() {
    return (
      <div>
        {this.state.err ?
          <div className="usa-alert usa-alert-error">
            <div className="usa-alert-body">
              <h3 className="usa-alert-heading">Oops!</h3>
              <p className="usa-alert-text">{this.state.err}</p>
            </div>
          </div>
        : null}


        <FormField id="input-firstname" formKey="firstname" label="First Name" validation="name" handleChange={this.handleChange.bind(this)} />
        <FormField id="input-lastname" formKey="lastname" label="Last Name" validation="name" handleChange={this.handleChange.bind(this)} />
        <FormField id="input-phone" formKey="phone" label="Mobile Phone Number" validation="phone" handleChange={this.handleChange.bind(this)} />
        <FormField id="input-email" formKey="email" label="Email Address" validation="email" handleChange={this.handleChange.bind(this)} />

        <button id="submitAppointment" onClick={() => hashHistory.push('/scheduleconfirmation')}>Create</button>
      </div>
    )
  }
}

export default CreateAppointmentPage;

export const mapStateToProps = (state) => {
  return {
    appointments: state.appointments.postOK
  }
};

export default connect(mapStateToProps)(CreateAppointmentPage);
