import React, { Component/*, PropTypes */} from 'react'
import {connect} from 'react-redux';
import {initLogin} from '../../actions/user-actions';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log('login submit', e);
    this.props.dispatch(initLogin(this.state.username, this.state.password));
  }

  render() {
    return (
      <div>
        <label htmlFor="txt-username">Username</label>
				<input ref="username" id="txt-username" name="username" type="text"
          value={this.state.username}
          onChange={(e) => this.setState({username: e.target.value})} />

        <label htmlFor="txt-password">Password</label>
				<input id="txt-password" name="password" type="password"
          value={this.state.password}
          onChange={(e) => this.setState({password: e.target.value})} />

        <button onClick={this.onSubmit}>Login</button>
      </div>
    );
  }
}

export default connect()(Login);
