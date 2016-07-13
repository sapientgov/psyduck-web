import '../../sass/uikit.scss';

import React, { Component } from 'react'
import {connect} from 'react-redux';
import FormField from '../common/form-field/form-field';
import {createAppointment} from '../../actions/appointments-actions';


class CreateAppointmentPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      office: '',
      staff: ''
    };
  }

  handleChange(obj) {
    console.log('VALID?' + this.modelIsValid());
    this.setState(obj, ()=>{
      console.log(this.state);
    });
  }

  modelIsValid() {
    //check for empty fields
    if(!this.state.firstname
      || !this.state.lastname
      || !this.state.email
      || !this.state.office
      || !this.state.date
      || !this.state.time
      || !this.state.staff
      || !this.state.phone ){
        console.log('a field is missing');
        return false;
    }

    //validate email format
    if(this.state.email.indexOf('@') <= -1){
      console.log('bad email');
      return false;
    }
    const alias = this.state.email.split('@')[0];
    const domain = this.state.email.split('@')[1];
    const domain1 = domain.split('.')[0];
    const domain2 = domain.split('.')[1];

    if(alias.length < 3 || domain1.length < 3 || domain2.length < 3){
      console.log('short email');
      return false;
    }

    return true;
  }

  submitAppointment() {
    if(this.modelIsValid()){
      console.log('Submitting!');
      //send state object to POST method
      this.props.dispatch(createAppointment(this.state));
    } else {
      console.log('ERROR!');//TODO
    }
  }

  render() {
    return (
      <div>
        <h3>Create an Appointment</h3>

        <FormField id="input-firstname" formKey="firstname" label="First Name" validation="name" handleChange={this.handleChange.bind(this)} />
        <FormField id="input-lastname" formKey="lastname" label="Last Name" validation="name" handleChange={this.handleChange.bind(this)} />
        <FormField id="input-phone" formKey="phone" label="Mobile Phone Number" validation="phone" handleChange={this.handleChange.bind(this)} />
        <FormField id="input-email" formKey="email" label="Email Address" validation="email" handleChange={this.handleChange.bind(this)} />

        <button id="submitAppointment" onClick={this.submitAppointment.bind(this)}>Create</button>
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
