import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AdminPage from './components/admin/AdminPage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="admin" component={AdminPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);

