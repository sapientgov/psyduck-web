import './sass/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Uikit from './components/uikit';
import ScheduleApt from './components/scheduleapt';
import ScheduleConfirmation from './components/scheduleconfirmation';
import AppointmentDetails from './components/appointmentdetails';
import Login from './components/login/login';
import Home from './components/home';
import StaffView from './components/staff-view/staff-view';
import CreateAppointmentPage from './components/create-appointment/create-appointment';

//root render
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="uikit" component={Uikit}/>
      <Route path="scheduleconfirmation" component={ScheduleConfirmation}/>
      <Route path="appointmentdetails" component={AppointmentDetails} />
      <Route path="scheduleapt" component={ScheduleApt}/>
      <Route path="login" component={Login}/>
      <Route path="staff" component={StaffView}/>
      <Route path="createAppointment" component={CreateAppointmentPage}/>
    </Route>
</Router>, document.getElementById('app'));
