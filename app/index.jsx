import './sass/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/app';
import Uikit from './components/uikit';
import LoginPage from './components/login/login-page';

//root render
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="uikit" component={Uikit}/>
      <Route path="login" component={LoginPage}/>
    </Route>
</Router>, document.getElementById('app'));
