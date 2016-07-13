import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import ErrorReducer from '../reducers/error-reducer';
import ConfigReducer from '../reducers/config-reducer';
import UserReducer from '../reducers/user-reducer';
import AppointmentsReducer from '../reducers/appointments-reducer';
import {configureApp} from '../actions/config-actions';
import {hashHistory} from 'react-router';

//combine reducers
const appReducers = combineReducers({
  error: ErrorReducer,
  config: ConfigReducer,
  user: UserReducer,
  appointments: AppointmentsReducer
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
          <div className="usa-width-one-whole site-header">
            <h1>Welcome to Psyduck<button className="usa-button-big right" onClick={() => hashHistory.push('/login')}>Staff Login</button></h1>
          </div>
          <main>
            {this.props.children}
          </main>
        </div>
      </Provider>
    );
  }
}
