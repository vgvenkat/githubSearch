import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Issues from './Issues';
const App = () => (
  <Router>
  <div>
      <Route exact path="/" component={Home} />
      <Route path="/repo/:repoName" component={Search} />
      <Route path="/issues" component={Issues} />
    </div>
  </Router>
)

export default App;
