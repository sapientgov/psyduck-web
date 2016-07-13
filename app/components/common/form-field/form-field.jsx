import React, { Component, PropTypes } from 'react'

class FormField extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      err: ''
    };
  }

  handleChange(event) {
    //clean the input
    const uncleanValue = event.target.value;
    var cleanValue = uncleanValue;

    if(this.props.validation === 'alpha'){
      cleanValue = uncleanValue.replace(/[^a-zA-Z]/g, '');
      event.target.value = cleanValue;
    } else if(this.props.validation === 'name'){
      cleanValue = uncleanValue.replace(/[^a-zA-Z-\'.]/g, '');
      event.target.value = cleanValue;
    } else if(this.props.validation === 'phone'){
      cleanValue = uncleanValue.replace(/[^0-9]/g, '');
      event.target.value = '(' + cleanValue.substr(0,3) + ')'
        + cleanValue.substr(3,3) + '-'
        + cleanValue.substr(6,4);
    } else if(this.props.validation === 'email'){
      if(cleanValue.indexOf('@') <= -1){
        this.setState({err: 'Don\'t forget the @ symbol!'});
      } else {
        const alias = cleanValue.split('@')[0];
        const domain = cleanValue.split('@')[1];
        const domain1 = domain.split('.')[0];
        const domain2 = domain.split('.')[1];
        if(alias.length < 3 || domain1.length < 3 || domain2.length < 3){
          this.setState({err: 'Your email address is too short to be recognized...'});
        } else {
          this.setState({err: ''});
        }
      }
    }

    //pass the state up to the container
    const stateVal = {};
    stateVal[this.props.formKey] = cleanValue;
    this.props.handleChange(stateVal);
  }

  render() {
    return (
      <div>
				<label htmlFor={this.props.id}>{this.props.label}</label>
        {this.state.err ?
          <span className="usa-input-error-message" id="input-error-message" role="alert">{this.state.err}</span>
          : null}
				<input id={this.props.id}
          name={this.props.id}
          onChange={this.handleChange.bind(this)}
          type="text" />
      </div>
    )
  }
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  formKey: PropTypes.string.isRequired,
  label: PropTypes.string,
  handleChange: PropTypes.func
}

export default FormField;
