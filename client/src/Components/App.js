import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Forecast from './Forecast';
import Landing from './Landing';
import SearchResults from './SearchResults';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        App
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/searchresults" exact component={SearchResults} />
          <Route path="/forecast/:location" exact component={Forecast} />
        </Switch>
      </Router>
    );
  }
}

export default App;
