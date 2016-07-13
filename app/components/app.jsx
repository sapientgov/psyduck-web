import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import ErrorReducer from '../reducers/error-reducer';
import ConfigReducer from '../reducers/config-reducer';
import UserReducer from '../reducers/user-reducer';
import {Link} from 'react-router';
import {configureApp} from '../actions/config-actions';

//combine reducers
const appReducers = combineReducers({
  error: ErrorReducer,
  config: ConfigReducer,
  user: UserReducer
});

//create redux logger
const loggerMiddleware = createLogger();

//create store
const store = createStore(appReducers, compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//get the app config
store.dispatch(configureApp());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <h1>Scheduler</h1>
            <nav>
              <ul>
                <li><Link activeClassName="activeLink" to="/">Home</Link></li>
                <li><Link className="mainNavLink" activeClassName="activeLink" to="/uikit">UI Kit</Link></li>
                <li><Link className="mainNavLink" activeClassName="activeLink" to="/login">Login</Link></li>
              </ul>
            </nav>
          <main>
            {this.props.children}
          </main>
        </div>
      </Provider>
    );
  }
}
