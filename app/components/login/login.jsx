import React, { Component/*, PropTypes */} from 'react'
import {connect} from 'react-redux';
import {initLogin} from '../../actions/user-actions';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      usernameFocused: false,
      password: '',
      passwordFocused: false
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.dispatch(initLogin(this.state.username, this.state.password));
  }

  render() {
    return (
      <div className="usa-grid">
      <div className="usa-width-one-whole">
        <div className={!this.state.username && this.state.usernameFocused ? 'usa-input-error' : ''}>
          <label htmlFor="txt-username">Username</label>
          {!this.state.username && this.state.usernameFocused ?
            <span className="usa-input-error-message" id="input-error-message" role="alert">Please enter a username</span>
            : null}
            <input id="txt-username" name="username" type="text"
            value={this.state.username.value}
            onBlur={() => this.setState({usernameFocused: true})}
            onChange={(e) => this.setState({username: e.target.value})} />
        </div>

        <div className={!this.state.password && this.state.passwordFocused ? 'usa-input-error' : ''}>
          <label htmlFor="txt-password">Password</label>
          {!this.state.password && this.state.passwordFocused ?
            <span className="usa-input-error-message" id="input-error-message" role="alert">Please enter a password</span>
            : null}
          <input id="txt-password" name="password" type="password"
            value={this.state.password.value}
            onBlur={() => this.setState({passwordFocused: true})}
            onChange={(e) => this.setState({password: e.target.value})} />
        </div>
      <button onClick={this.onSubmit}>Login</button>
      </div>
      </div>
    );
  }
}

export default connect()(Login);
