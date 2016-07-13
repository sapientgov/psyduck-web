import '../../sass/uikit.scss';

import React, { Component/*, PropTypes */} from 'react'
// import {connect} from 'react-redux';

class FormField extends Component {

  handleChange(event) {
    const stateVal = {};
    stateVal[this.props.formKey] = event.target.value;
    this.props.handleChange(stateVal);
  }

  render() {
    return (
      <div>
				<label htmlFor={this.props.id}>{this.props.label}</label>
				<input id={this.props.id}
          name={this.props.id}
          onChange={this.handleChange}
          type="text" />
      </div>
    )
  }
}

// FormField.propTypes: {
//   id:
// }

export default FormField;
