import React, {Component} from 'react';
import {connect} from 'react-redux';

export class StaffView extends Component {
  render() {
    return (
      <p>Logged in as: {this.props.user}</p>
    );
  }
}

export function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(StaffView);
