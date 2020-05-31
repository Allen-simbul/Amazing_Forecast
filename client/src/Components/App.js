import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Forecast from './Forecast';
import Landing from './Landing';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        App
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/api/forecast/:city" exact component={Forecast} />
        </Switch>
      </Router>
    );
  }
}

export default App;
