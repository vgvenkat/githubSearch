import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Issues from './Issues';
const AppRoutes = (props) => (
  <Router>
  <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/repo/:repoName" component={Search} />
      <Route  path="/repo/:repoName/issues" component={Issues} />
    </div>
  </Router>
)

export default AppRoutes;
