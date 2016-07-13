import React, { Component, PropTypes } from 'react'

class FormField extends Component {

  handleChange(event) {
    //validate the input
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
