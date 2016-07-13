import './sass/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/app';
import Uikit from './components/uikit';
import ScheduleApt from './components/scheduleapt';
import Login from './components/login/login';
import StaffView from './components/staff-view/staff-view';

//root render
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="uikit" component={Uikit}/>
      <Route path="scheduleapt" component={ScheduleApt}/>
      <Route path="login" component={Login}/>
      <Route path="staff" component={StaffView}/>
    </Route>
</Router>, document.getElementById('app'));
