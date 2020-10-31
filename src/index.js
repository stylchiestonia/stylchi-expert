import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import store from 'store';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import './i18n';
import { setCurrentUser, logoutUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from 'private-route/PrivateRoute';

import AdminLayout from 'layouts/Admin/Admin.js';
import AuthLayout from 'layouts/Auth/Auth.js';
import HomeLayout from 'layouts/Home/Home.js';
import ThankYou from 'layouts/Feedback/ThankYou.js';
import 'assets/scss/black-dashboard-react.scss';
import 'assets/css/nucleo-icons.css';
import 'react-datetime/css/react-datetime.css';

const hist = createBrowserHistory();
axios.defaults.baseURL = 'https://stylchi-backend-293213.ew.r.appspot.com/api'

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token)
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = './';
  }
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
    <Route   path='/thank-you' component={ThankYou} />
    <Route   path='/auth' component={AuthLayout} />
    <Route exact path='/' component={HomeLayout} />
      <Switch>
        <PrivateRoute path='/admin' component={AdminLayout} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
